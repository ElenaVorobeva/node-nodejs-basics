import { execFile } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = execFile('node', [filePath, ...args], (error) => {
        if (error) {
            throw error;
        }
    });

    child.stdout.on('data', (data) => {
        stdin.write(data)
    })

    stdin.on('data', (data) => {
        child.stdin.write(data)
    })

    child.stdout.on('end', () => {
        process.exit();
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test', 'test 2']);
