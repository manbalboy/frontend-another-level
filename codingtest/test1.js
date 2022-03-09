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


// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//   n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
//
//   제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
//   입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
//
//   입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.


function solution(n) {
  const sqrt = Math.sqrt(n);

  if(sqrt % 1 === 0) {

    return sqrt > 0 ? (sqrt+1) * (sqrt+1) : -1;
  }
}

// 문제 설명
// 문제 설명
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
//
//   각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
//   신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
//   한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
//   k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
//   유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
//   다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.
//
//   유저 ID	유저가 신고한 ID	설명
// "muzi"	"frodo"	"muzi"가 "frodo"를 신고했습니다.
// "apeach"	"frodo"	"apeach"가 "frodo"를 신고했습니다.
// "frodo"	"neo"	"frodo"가 "neo"를 신고했습니다.
// "muzi"	"neo"	"muzi"가 "neo"를 신고했습니다.
// "apeach"	"muzi"	"apeach"가 "muzi"를 신고했습니다.
//   각 유저별로 신고당한 횟수는 다음과 같습니다.
//
//   유저 ID	신고당한 횟수
// "muzi"	1
// "frodo"	2
// "apeach"	0
// "neo"	2
// 위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.
//
//   유저 ID	유저가 신고한 ID	정지된 ID
// "muzi"	["frodo", "neo"]	["frodo", "neo"]
// "frodo"	["neo"]	["neo"]
// "apeach"	["muzi", "frodo"]	["frodo"]
// "neo"	없음	없음
// 따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.
//
//   이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.
//
//   제한사항
// 2 ≤ id_list의 길이 ≤ 1,000
// 1 ≤ id_list의 원소 길이 ≤ 10
// id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
//   id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
// 1 ≤ report의 길이 ≤ 200,000
// 3 ≤ report의 원소 길이 ≤ 21
// report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
//   예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
//   id는 알파벳 소문자로만 이루어져 있습니다.
//   이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
//   자기 자신을 신고하는 경우는 없습니다.
// 1 ≤ k ≤ 200, k는 자연수입니다.
//   return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
//   입출력 예
// id_list	report	k	result
//   ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
//   ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]
// 입출력 예 설명
// 입출력 예 #1
//
// 문제의 예시와 같습니다.
//
//   입출력 예 #2
//
// "ryan"이 "con"을 4번 신고했으나, 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다. 따라서 "con"은 1회 신고당했습니다. 3번 이상 신고당한 이용자는 없으며, "con"과 "ryan"은 결과 메일을 받지 않습니다. 따라서 [0, 0]을 return 합니다.
//
//   제한시간 안내
// 정확성 테스트 : 10초

function solution(id_list, report, k) {
  var answer = [];
  //신고당한 횟수
  const count = {}

  const singo =  {};
  id_list.forEach(item => {count[item] = 0; singo[item] = []});

  const setReport = [...new Set(report)]

  setReport.forEach(item => {
    const [key, value] = item.split(' ');

    count[value] = ++count[value];
    singo[key].push(value);
  })

  const stopId = [];

  for(let key in count) {
    if(count[key] >= k){
      stopId.push(key);
    }
  }


  for( let key in singo ) {
    let list = singo[key];
    let returnCount = 0;

    list.forEach(item => {
      if(stopId.includes(item)) {
        returnCount = ++returnCount;
      }
    })
    answer.push(returnCount);


  }

  return answer;
}

// 문제 설명
// 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
//
//   예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
//
//   종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
//
//   제한사항
// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
//   스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
//   같은 이름을 가진 의상은 존재하지 않습니다.
//   clothes의 모든 원소는 문자열로 이루어져 있습니다.
//   모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
//   스파이는 하루에 최소 한 개의 의상은 입습니다.
//   입출력 예
// clothes	return
// [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	5
//   [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]	3
// 입출력 예 설명
// 예제 #1
// headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
//
// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses
// 예제 #2
// face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
//
// 1. crow_mask
// 2. blue_sunglasses
// 3. smoky_makeup

function solution(clothes) {
  var answer = 1;
  var obj={};
  clothes.forEach(([value, key]) => {
    obj[key] = (obj[key] || 1) + 1;
  })


  for(var key in obj){
    answer *= obj[key];
  }

  return answer - 1;

}


function solution(m, product){
  let answer=0;
  let n=product.length;
  product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
  for(let i=0; i<n; i++){
    let money=m-(product[i][0]/2+product[i][1]);
    let cnt=1;
    for(let j=0; j<n; j++){
      if(j!==i && (product[j][0]+product[j][1])>money) break;
      if(j!==i && (product[j][0]+product[j][1])<=money){
        money-=(product[j][0]+product[j][1]);
        cnt++;
      }
    }
    answer=Math.max(answer, cnt);
  }
  return answer;
}


let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));


function test(p1,p2) {
  let count=0;
  let temp = [];
  let root = [];
  function DFS (r, c) {
    if (r === p1 && c === p2) {
      temp.push([r,c]);
      root.push([...temp]);
      console.log(temp.slice());
      temp.pop();
      count++
    } else {
      if(r<=p1 && c <=p2) {
        temp.push([r,c]);
        DFS(r+1, c);
        temp.pop();

        temp.push([r,c]);
        DFS(r, c+1);
        temp.pop();
      }
    }
  }
  DFS(1,1);
  return root.length;
}