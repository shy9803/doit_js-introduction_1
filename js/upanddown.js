var count = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1; // 컴퓨터 무작위 수 생성

/* PDF 소스코드 내용 -> 일부 오류 발생 */
// 키보드 입력 시 작동
// document.querySelector('#try').onkeypress = function(e) {
//   if(e.keycode == 13 || e.which == 3) { // 눌린 키가 [Enter]키라면 // event.keycode 값(파이어폭스: event.which) 
//     return false; // keypress 이벤트가 발생했을 때 브라우저가 기본으로 하는 동작 취소
//   }
// }

// '확인' 버튼 클릭시 실행 함수
// function finding() {
//   var userNumber = document.querySelector('#try').value; // PDF 소스코드 내용

//   // 사용자가 입력한 숫자 (1~100 사이 숫자 여부 확인)
//   if (userNumber >=1 && userNumber <= 100) {
//     // console.log(userNumber);
//     if (randomNumber > userNumber) { // 컴퓨터 숫자가 클 경우 - 'UP' 표시
//       document.querySelector('#display').innerHTML = "UP!"; // #display 영역에 'UP!' 표시 // PDF 소스코드 내용
//     } else if (randomNumber < userNumber) { // 컴퓨터 숫자가 작을 경우 - 'Down' 표시
//       document.querySelector('#display').innerHTML = "Down!"; // #display 영역에 'DOWN!' 표시 // PDF 소스코드 내용
//     } else { // 컴퓨터 숫자를 맞혔을 경우
//       document.querySelector('#display').innerHTML = "<span style='color: red'>맞혔습니다!</span>"; // #display 영역에 빨간색으로 '맞혔습니다!' 표시 // PDF 소스코드 내용
//     }
//     document.querySelector('#try').value = ""; // 텍스트 필터 초기화 // PDF 소스코드 내용
//     count++
//     document.querySelector('#counter').innerHTML = "시도 횟수: " + count + "회"; // #counter 영역에 시도 횟수(count) 표시
//   } else {
//     alert("1과 100 사이의 숫자를 입력하세요.");
//   }
// }

/* 정답 JS 파일 : PDF 파일 오류 수정 */
// 키보드 입력 시 작동
document.querySelector('#try').onkeypress = function(e) {
  if(e.keycode == 13 || e.which == 13) { // 정답 JS 파일
    finding(); // finding() 함수 실행
    return false; // keypress 이벤트가 발생했을 때 브라우저가 기본으로 하는 동작 취소
  }
}

function finding() { 
  var userNumber = document.getElementById('try').value;

  // 사용자가 입력한 숫자 (1~100 사이 숫자 여부 확인)
  if (userNumber >=1 && userNumber <= 100) {
    if (randomNumber > userNumber) { // 컴퓨터 숫자가 클 경우 - 'UP' 표시
      document.getElementById('display').innerHTML = "UP!";
    } else if (randomNumber < userNumber) { // 컴퓨터 숫자가 작을 경우 - 'Down' 표시
      document.getElementById('display').innerHTML = "Down!";
    } else { // 컴퓨터 숫자를 맞혔을 경우
      document.getElementById('display').innerHTML = "<span style='color: red'>맞혔습니다!</span>";
    }
    document.getElementById('try').value = "";
    count++
    document.querySelector('#counter').innerHTML = "시도 횟수: " + count + "회"; // #counter 영역에 시도 횟수(count) 표시
  } else {
    alert("1과 100 사이의 숫자를 입력하세요.");
  }
}
