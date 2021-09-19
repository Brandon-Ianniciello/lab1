exports.addition = (x,y) => { return x+y }
exports.soustraction = (x,y) => { return x-y }
exports.multiplication = (x,y) => { return x*y }
exports.division = (x,y) => { return x/y }
exports.modulo = (x,y) => { return x%y }

exports.factorielle = (n) =>{
    var f=1

    for(i = 1; i <= n; i++){
        f *= i;
    }
    return f;
}

exports.prime = (n) =>{
    let prime = 0;
    for(i=0; i < n; i++){
        prime++;
        while(!isPrime(prime)){
            prime++;
        }
    }
    return prime;
}

exports.isPrime = (num) =>{
    for(var i = 2; i < num; i++){
        if(num % i === 0) return false;     
    }
    return num > 1;
}