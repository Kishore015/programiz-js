(
    () => {
        const a = 1;
        const b = 5;
        const c = a+b;
        console.log(`Hello world ${c}`)
    }
)();

// IIFE second example
(
    () => {
        console.log('IIFE with forEach')
        const arr = [1,2,3,4,5,6,7,8,9];
        arr.forEach((e) => {
            console.log(e);
        })
    }
)();


// IIFE with for loop
(
    () => {
        console.log('IIFE with for loop')
        const array = [1,2,3,4,5,6,7,8,9];
        for(let i=0;i<array.length;i++){
            console.log(array[i])
        }
    }
)();