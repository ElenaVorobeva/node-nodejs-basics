
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const workerData = process.env.workerData;

    if (typeof Number(workerData) === 'number') {
        const data = nthFibonacci(workerData);
        process.send({ data, status: 'resolved'});        
    } else {
        process.send({ data: null, status: 'error'});        
    }
    
    // parentPort.postMessage(result)
    // console.log(parentPort)
};

sendResult();