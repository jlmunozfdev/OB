
let n = 10;
let factorial = n - 1;

while (factorial > 1) {
    n *= factorial;
    factorial--;
}

console.log(n);