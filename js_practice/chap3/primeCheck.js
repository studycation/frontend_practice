const number = parseInt(prompt("자연수를 입력하세요."));
let isPrime;

if (number === 1) {
    document.writeln(`${number}는 소수도 합성수도 아닌, 1입니다.`);
} else if (number === 2) {
    isPrime = true;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }  
        else {
            isPrime = true;
        }
    }
}

if (isPrime) {
    document.writeln(`${number}은(는) 소수입니다.`);
} else {
    document.writeln(`${number}은(는) 소수가 아닙니다.`);
}