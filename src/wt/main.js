import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';
import cluster from 'cluster';

const performCalculations = async () => {
    // Write your code here
    const numCPUs = os.cpus().length;
    let count = 1;
    const result = [];
    
    // const worker = new Worker('./worker.js', {  workerData: 10, resourceLimits: numberOfCores });

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    cluster.setupPrimary({
        exec: __dirname + '/worker.js',
    });

    if (cluster.isPrimary) {
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork({workerData: 10 + i});
        }

        cluster.on('online', (worker) => {
            result.push({id: worker.id, status: 'pending'})
        })

        // Listen for workers being online
        cluster.on('message', (worker, message) => {
            
            const itemIndex = result.findIndex(({id}) => id === worker.id);
            result[itemIndex] = message;
            
            if (numCPUs === count) {
                console.log(result)
                process.exit();
            }

            count++;
        });

        // Listen for workers exiting
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker process ${worker.process.pid} has exited with code ${code} and signal ${signal}`);
            console.log('Starting a new worker');
        });
    }
};

await performCalculations()