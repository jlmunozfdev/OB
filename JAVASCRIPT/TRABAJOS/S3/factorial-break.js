let n = 10;
let factorial = n - 1;

while (n) {
    n *= factorial;
    factorial--;
    if (factorial <=1 ) 
    break;
}

console.log(n);