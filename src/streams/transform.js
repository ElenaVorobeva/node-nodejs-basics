import process from 'process';
import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 

    const reverse = new Transform({
        transform(chunk, enc, cb) {
            cb(null, chunk.reverse() + '\n');
        }
    })

    process.stdin.pipe(reverse).pipe(process.stdout);

    process.stdin.on('data', () => {
        process.exit();
    })
};

await transform();