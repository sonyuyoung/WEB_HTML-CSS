// 대화상자 함수
// 1) alert
// 2)let age = prompt("나이를 입력해 주세요!", 100);
// alert(`당신의 나이는 ${age} 입니다`);

// confirm:확인또는 취소 참이 확인 거짓이 취소
// confirm('당신이 주인인가요?')
// let result = confirm("당신이 주인인가요?");
// alert (result);
// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// alert(a + b); // 12 문자열을 숫자열로 바꾸어주어야함
// //  alert(number(a) + number(b));
//   console.log : 출력되는
//if문
// let 사과 = 2,
//   바나나 = 3;

// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다.");
// } else if (바나나 > 사과) {
//   console.log("바나나가 사과보다 많습니다.");
// } else {
//   console.log("같습니다");
// }

// if (사과 < 바나나) {
//   console.log("바나나가 사과보다 많습니다.");
// }
// if ((사과 = 바나나)) {
//   console.log("사과와 바나나와 같습니다.");
// }

// for 반복문 1에서 100까지 콘솔에 출력하라!
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("합계는:" + sum);

for (let i = 1; i<=100; i++);
{ 
    if (i % 3 == 0 && i % 5 == 0)
{console.log("삼삼오오");
}

else if ( i % 5 == 0) {
console.log("오오");
}
else {
console.log(i);
}
