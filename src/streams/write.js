import fs from 'fs';
import process, { stdin } from 'process';

const write = async () => {
  // Write your code here 
  process.stdin.on('data', data => {
    fs.appendFile('./files/fileToWrite.txt', data.toString() + '\n', (err) => {
      if (err) {
        throw Error(err)
      }
      process.exit()
  })
  })
};

await write();