// function Prime(num) {
//     const primes = [];
//     const isPrime = new Array(num + 1).fill(true);

//     for (let p = 2; p <= num; p++) {
//         if (isPrime[p] === true) {
//             primes.push(p);
//             for (let i = p * p; i <= num; i += p) {
//                 isPrime[i] = false;
//             }
//         }
//     }

//     return primes;
// }

// function printPrimes(primes) {
//     for (const prime of primes) {
//         console.log(`Prime: ${prime}`);
//     }
// }

// const num = 10000;
// const primes = Prime(num);
// printPrimes(primes);

// function generatePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += j + ' ';
//         }
//         console.log(pattern);
//     }
// }

// // Example usage:
// generatePattern(50);

// function generateTrianglePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += j + ' ';
//         }
//         console.log(pattern);
//     }
// }

// // Example usage:
// generateTrianglePattern(5);

function generateTrianglePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        console.log(pattern);
    }
}

function generateTrianglePattern(rows) {
    for (let i > 0; i <= rows; i--) {
        let pattern = '';
        for (let j = ; j <= i; j++) {
            pattern += j + ' ';
        }
        console.log(pattern);
    }
}

// Example usage:
generateTrianglePattern(5);
