// Number 1

// const first = () =>
//     new Promise((resolve, reject) => {
//         console.log('a');
//         reject('b');
//         console.log('c');
//     })

// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//d, a, c, e, b

//Number 2

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         reject('b');
//         console.log('c');
//     })

// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')


//d, a, c, e, b, f

// Number 3

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         setTimeout(() => {
//             resolve('b');
//             console.log('c');
//         }, 4000)
//     })
// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//d, a, e, f, c, b

// Number 4

// const first = () =>
//     new Promise((resolve, reject) => {
//         console.log('a');
//         console.log('c');
//     })
// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//d, a, c, e

// Number 5

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         setTimeout(() => {

//             console.log('c');
//         }, 1000);
//         resolve('b');
//     })
// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//d, a, e, b, c, f

//Number 6

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second();
//         resolve('a');
//         reject('b');
//         console.log('c');
//     })

// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//callback - f(2000), 
// microtask - resolve a

//d, c, e, a, f

//Number 7

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         setTimeout(() => {
//             console.log('c');
//         }, 0);
//         resolve('b');
//     })
// console.log('d');
// first().then((data) => {
//     console.log(data);
// }).catch(err => console.log(err));
// console.log('e')

//callback - c(0), f(2000), 
// microtask - data-b
//d, a, e, b, c, f

//Number 8

// const second = () => setTimeout(() => {
//     console.log('f')
// }, 2000)

// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         setTimeout(() => {
//             console.log('c');
//         }, 0);
//         resolve('b');
//     })
// console.log('d');
// first().then(() => console.log('g'))
//     .catch(err => console.log(err));
// console.log('e')

//callback - c(0), f(2000)
// microtask - 
//d, a, e, g, c, f


//Number 9

// const second = async () => {
//     setTimeout(() => {
//         console.log('f')
//     }, 0)
//     console.log('g');
//     return 'h';
// }
// const first = () =>
//     new Promise((resolve, reject) => {
//         second()
//         console.log('a');
//         setTimeout(() => {
//             console.log('c');
//         }, 0);
//         resolve('b');
//     })
// console.log('d');
// console.log(first());
// console.log('e');

//callback - f(0), c(0)
// microtask - 
//d, g, a, PromiseObject, e, f, c


//Number 10

// const second = async () => {
//     setTimeout(() => {
//         console.log('f')
//     }, 0)
//     console.log('g');
//     return 'h';
// }

// const first = () =>
//     new Promise(async (resolve, reject) => {
//         const value = await second()
//         console.log('a', value);
//         setTimeout(() => {
//             console.log('c');
//         }, 0);
//         resolve('b');
//     })
// console.log('d');
// console.log(first().then((data) => console.log(data)));
// console.log('e');

//callback - f(0), c(0)
// microtask - 
//d, g, promise, e, (a, h), b, f, c


// Number 11

// const second = async () => {
//     setTimeout(() => {
//         console.log('f')
//     }, 0)
//     console.log('g');
//     return 'h';
// }

// const first = () =>
//     new Promise(async (resolve, reject) => {
//         const value = second()
//         console.log('a', value);
//         setTimeout(() => {
//             console.log('c');
//         }, 0);
//         resolve('b');
//     })
// console.log('d');
// console.log(first().then((data) => console.log(data)));
// console.log('e');

//callback - 
// microtask - 
//d, 

// Number 12

const second = async () => {
    setTimeout(() => {
        console.log('f')
    }, 0)
    console.log('g');
    return 'h';
}

const first = () =>
    new Promise(async (resolve, reject) => {
        const value = second()
        console.log('a', value);
        setTimeout(() => {
            console.log('c');
            resolve('b');
        }, 0);
        setTimeout(() => {
            console.log('i');
            reject('j');
        }, 0);
        const latestValue = await value;
        console.log(latestValue)
    })
console.log('d');
console.log(first().then((data) => console.log(data)));
console.log('e');

//callback -  i,j(0)
// microtask - b
//d, g, (a, promise h), promise pending, e, h, f, c, b, i
