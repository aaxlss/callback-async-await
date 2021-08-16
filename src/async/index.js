const dosomethingAsync = () => {

    return new Promise((resolve, reject) => {
        true
        ? setTimeout(() => resolve('Do something Async') ,3000)
        : reject(new Error('Test Error'))
    });
}


const dosomething = async () => {
    const something = await dosomethingAsync();

    console.log(something);
}

console.log('before');
dosomething();
console.log('after');


const anotherFunction = async () => {
    try{
        const something = await dosomethingAsync();
        console.log(something + '1');
    }catch(error){
        console.log(error)
    }
}


console.log('before 1');
anotherFunction();
console.log('after 1');