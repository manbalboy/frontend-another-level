// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
//
//   소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)
//
// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.


function solution(n) {

  const array = [false, false, Array(n-1).fill(true)];

  for(let i = 2; i*i <=n; i+=1){
    if(array[i]){
      for(let j = i * 2; j<=n; j+= i ) {
        array[j] = false;
      }
    }
  }


  return array.filter(v=>v).length;
}

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
//
//   제한 조건
// n은 10,000,000,000이하인 자연수입니다.
//   입출력 예

function solution(n) {
  return String(n).split("").reverse();
}