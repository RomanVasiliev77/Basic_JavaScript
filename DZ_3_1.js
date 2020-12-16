let a = 0;

while (a < 100) {
    if (primeNumber(a)) {
        console.log(a);
    }
    a++
}

function primeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}