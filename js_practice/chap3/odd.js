let userInput = prompt("숫자를 입력하세요.");

if (userInput !== null) {
    userInput = parseInt(userInput);
    //(userInput %2 === 0) ? alert(`${userInput}은(는) 짝수입니다.`) : alert(`${userInput}은(는) 홀수입니다.`)
    if (userInput % 2 === 0) {
        alert(`${userInput}은(는) 짝수입니다.`)
    } else if (userInput % 2 !== 0) {
        alert(`${userInput}은(는) 홀수입니다.`)
    }
    else {
        alert("정수를 입력해주세요.")
    }
}