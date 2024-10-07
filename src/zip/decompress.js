import { createUnzip } from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs'



const decompress = async () => {
    // Write your code here 
    const unzip = createUnzip();
    const file = createReadStream('./files/archive.gz');
    const target = createWriteStream('./files/fileToCompress.txt');

    file.pipe(unzip).pipe(target);
};

await decompress();