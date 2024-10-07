import fs from 'fs';
import process from 'process';

const read = async () => {
    // Write your code here 

    fs.createReadStream('./files/fileToRead.txt').pipe(process.stdout);
};

await read();