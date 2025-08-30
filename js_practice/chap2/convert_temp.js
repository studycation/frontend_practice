let Fheat = parseFloat(prompt("변환하고 싶은 화씨 온도를 입력하세요."));

let Cheat;

Cheat = ((Fheat - 32) / 1.8);
Cheat2 = Cheat.toFixed(1);

alert(`화씨 ${Fheat} 도는 섭씨 ${Cheat2} 도입니다.`);