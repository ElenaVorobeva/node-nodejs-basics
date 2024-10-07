import { pipeline } from 'node:stream';
import {createGzip} from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs'

const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const file = createReadStream('./files/fileToCompress.txt');
    const target = createWriteStream('./files/archive.gz');

    pipeline(file, gzip, target, (err) => {
        if (err) {
            throw Error(err);
            process.exitCode = 1;
        }
    })
};

await compress();