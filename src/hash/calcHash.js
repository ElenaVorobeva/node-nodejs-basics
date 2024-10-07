import fs from 'fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  // Write your code here

  const stream = fs.createReadStream('./files/fileToCalculateHashFor.txt');
  const hashSum = createHash('sha256');
  
  stream.on('data', (chunk) => {
    hashSum.update(chunk)
  })

  stream.on('end', () => {
    const hash = hashSum.digest('hex');
    console.log(hash);

    return hash;
  })
};

await calculateHash();