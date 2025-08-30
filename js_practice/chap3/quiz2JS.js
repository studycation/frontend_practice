let number = parseInt(prompt("1보다 큰 수를 입력하세요."));
let number2;
let result = 0;

while (number <= 1) {
    alert("1보다 큰 수를 입력하세요.");
    number = parseInt(prompt("1보다 큰 수를 입력하세요."));
}

if (number % 2 !== 0) {
    number2 = (number - 1) / 2; 
    for (let index = 1; index <= number2; index++) {
        result += 2 * index;
    }
    document.writeln(`${number}보다 같거나 작은 짝수를 모두 더한 값은 ${result}입니다.`);
} else {
    number2 = number / 2;
    for (let index = 1; index <= number2; index++) {
        result += 2 * index;
    }
    document.writeln(`${number}보다 같거나 작은 짝수를 모두 더한 값은 ${result}입니다.`);
    
}