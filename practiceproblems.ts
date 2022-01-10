console.log("Problem 1: fizzbuzz");

for (let i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " fizzbuzz");
    } 
    if(i % 3 == 0){
        console.log(i + " fizz");
    }
    if(i % 5 == 0){
        console.log(i + " buzz");
    }
}

console.log("Problem 2: fibonacci first 100 #'s");

let i = 0;
let fib = [];

fib[0] = 0;
fib[1] = 1;

for(i = 2; i < 101; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib[i]);
}

console.log("Problem 3: Is Parameter a Prime?");

function isPrime(num){
    if(num === 1){
        console.log(num + " is neither prime nor composite");
    }else if(num > 1){
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                console.log(num + " is not a prime number.");
            }else {
                console.log(num + " is a prime number.");
            }
        }
    }
}
