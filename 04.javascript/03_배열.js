// 배열 테스트
function test1(){
    // let arr = new Array();
    // 리터럴 : 프로그램에서 사용될 값
    // (숫자:1, 3, 문자는 '감자' 또는 "감자")
    let area=document.getElementById('area1');
    let arr=[
        '홍길동',           // 문자
        20,                 // 숫자
        true,               // 논리값
        [1, 2, 3, 4],       // 배열
        function() {         // 함수
            return 1;       
        },
        {}                  // 객체
    ];
    console.log(arr);
    area.innerHTML=arr;
}

// 배열 선언 및 초기화
function test2(){
    let arr1=new Array();
    let arr2=new Array(3);
    let arr3=new Array('빨강', '파랑', '노랑', '초록');
    let arr4=['java', 'oracle', 'html5', 'css3', 'javascript'];
    let area=document.getElementById('area2');

    // 자바에서는 예외처리가 뜬다. 아웃오브바운드익셉션. JS는 가능함.
    arr1[0]='귤';
    arr1[1]='사과';
    arr1[2]='딸기';

    area.innerHTML=`arr1에 값 대입 : ${arr1}, <br> arr1.length : ${arr1.length} <br><br>`;
    
    // arr2는 3개짜리인데, 1개 더 추가하면? 추가됨, 재할당되어 새로운 요소 추가됨, length도 자동추가되어 4가 됨
    arr2[0]='자동차';
    arr2[1]='비행기';
    arr2[2]='기차';
    arr2[3]='배(타는 배)';
    area.innerHTML+=`arr2에 값 대입 : ${arr2}, <br> arr2.length : ${arr2.length} <br><br>`;
    
    area.innerHTML+=`arr3에 값 대입 : ${arr3}, <br> arr3.length : ${arr3.length} <br><br>`;
    area.innerHTML+=`arr4에 값 대입 : ${arr4}, <br> arr4.length : ${arr4.length} <br><br>`;

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
}

// 배열 메소드 테스트
// 1) indextOf()
function test3(){
    let arr=['귤', '복숭아', '딸기', '망고', '포도'];
    let area=document.getElementById('area3');
    
    area.innerHTML=`arr : [${arr}] <br>`;
    area.innerHTML+=`복숭아가 있는 배열의 인덱스 : [${arr.indexOf('복숭아')}] <br>`;
    area.innerHTML+=`망고가 있는 배열의 인덱스 : [${arr.indexOf('망고')}] <br>`;
    // 없는 요소를 찾을 경우 '[-1]'이 뜬다. 
    area.innerHTML+=`수박이 있는 배열의 인덱스 : [${arr.indexOf('수박')}](없는 요소) <br>`;
}

// 2) concat()
    // 원본 배열에는 영향을 미치지 않는다. (이뮤터블?)
function test4(){
    let arr1=['귤', '복숭아', '딸기', '망고', '포도'];
    let arr2=['메론', '키위', '두리안', '망고스틴', '리치', '용안'];
    let area=document.getElementById('area4');

    area.innerHTML=`arr1 : [${arr1}] <br>`;
    area.innerHTML+=`arr2 : [${arr2}] <br><br>`;
    
    area.innerHTML+=`▶ arr1 기준으로 배열을 결합 : [${arr1.concat(arr2)}] <br>`;
    area.innerHTML+=`▷ 원본배열 arr1 : [${arr1}] <br><br>`;
    // 원본 배열에는 영향을 미치지 않는다. (이뮤터블?)
    
    area.innerHTML+=`▶ arr2 기준으로 배열을 결합 : [${arr2.concat(arr1)}] <br>`;
    area.innerHTML+=`▷ 원본배열 arr2 : [${arr2}] <br><br>`;
}

// 3) join() 메소드
function test5(){
    let arr=['강남', '역삼', '선릉', '삼성'];
    let area=document.getElementById('area5');

    area.innerHTML+=`arr : [${arr}] <br><br>`;
    area.innerHTML+=`arr의 자료형 : [${typeof(arr)}] <br><br>`;
    area.innerHTML+=`arr.join() : [${arr.join()}] <br><br>`;
    area.innerHTML+=`arr.join() : [${arr.join('|')}] <br><br>`;
    area.innerHTML+=`arr.join의 자료형 : [${typeof(arr.join())}] <br><br>`;
}

// 4) reverse()
// 원본 배열에 영향을 미치는 메소드이다. 
function test6(){
    // ↓ 이걸로도 배열을 만들 수 있다! ES6부터 추가됨 
    let arr=Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let area=document.getElementById('area6');

    area.innerHTML+=`arr : [${arr}] <br><br>`;
    area.innerHTML+=`arr.reverse() : [${arr.reverse()}] <br><br>`;
    area.innerHTML+=`arr : [${arr}] <br><br>`;
}

// 5) sort()
// 원본 배열에 영향을 미치는 메소드이다. 
function test7(){
    let arr1=[10, 543, 34, 450, 123, 885];
    let arr2=['Cherry', 'Apple', 'Banana'];
    let area=document.getElementById('area7');

    area.innerHTML+=`arr1 : [${arr1}] <br>`;
    area.innerHTML+=`arr2 : [${arr2}] <br><br>`;
    area.innerHTML+=`arr1.sort : [${arr1.sort()}] <br>`;
    area.innerHTML+=`arr2.sort : [${arr2.sort()}] <br><br>`;

    area.innerHTML+=`arr1 : [${arr1}] <br>`;
    area.innerHTML+=`arr2 : [${arr2}] <br><br>`;
    
    // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다. 
    arr1.sort(function(left, right){
        return left-right; // 오름차순
    });
    area.innerHTML+=`arr1 오름차순으로 정렬 : [${arr1}] <br>`;

    // 애로우펑션으로 구현함({}랑 return 생략가능함)
    arr1.sort((left, right) => right-left); // 내림차순
    area.innerHTML+=`arr1 내림차순으로 정렬 : [${arr1}] <br><br>`;
    
    area.innerHTML+=`arr2 내림차순으로 정렬(arr2.sort.reverse()) : [${arr2.sort().reverse()}] <br>`;

}

// 6) push() pop()
function test8(){
    let arr=['잇지', '엔시티', '방탄소년단', '소녀시대', '아이유'];
    let area=document.getElementById('area8');

    area.innerHTML=`▶ arr : [${arr}] <br>`;
    arr.push('레드벨벳'); // push후 총 요소의 개수를 리턴한다. 
    area.innerHTML+=`▷ arr에 push() 후 : [${arr}] <br>`;
    arr.push('박명수');
    area.innerHTML+=`▷ arr에 push() 후 : [${arr}] <br><br>`;
    
    area.innerHTML+=`▶ arr.pop() : ${arr.pop()}<br>`;
    area.innerHTML+=`▷ arr에 pop() 후 : [${arr}] <br><br>`;
    area.innerHTML+=`▶ arr.pop() : ${arr.pop()}<br>`;
    area.innerHTML+=`▷ arr에 pop() 후 : [${arr}] <br><br>`;
}

// 7) shift(), unshift()
function test9(){
    let arr=['잇지', '엔시티', '방탄소년단', '소녀시대', '아이유'];
    let area=document.getElementById('area9');

    area.innerHTML=`▶ arr : [${arr}] <br>`;
    arr.unshift('레드벨벳'); // unshift후 총 요소의 개수를 리턴한다. 
    area.innerHTML+=`▷ arr에 unshift() 후 : [${arr}] <br>`;
    arr.unshift('박명수'); // unshift후 총 요소의 개수를 리턴한다. 
    area.innerHTML+=`▷ arr에 unshift() 후 : [${arr}] <br><br>`;
    
    area.innerHTML+=`▶ arr.shift() : ${arr.shift()}<br>`;
    area.innerHTML+=`▷ arr에 shift() 후 : [${arr}] <br><br>`;
    area.innerHTML+=`▶ arr.shift() : ${arr.shift()}<br>`;
    area.innerHTML+=`▷ arr에 shift() 후 : [${arr}] <br><br>`;
}

// 8) slice() splice()
// slice() : 원본 배열에는 영향을 주지 않는다.(새로운 배열 만들어서 반환하는 것임)
// splice() : 원본 배열에 영향을 준다. 
function test10(){
    let arr=['java', 'db', 'html', 'css', 'js'];
    let area=document.getElementById('area10'); 

    area.innerHTML+=`arr : [${arr}] <br><br>`;
    area.innerHTML+=`arr.slice(2, 4) : [${arr.slice(2, 4)}] <br><br>`;
    area.innerHTML+=`arr : [${arr}] <br><br>`;//원본에 영향 X
    
    // 2번 인덱스에서 2개 잘라낸다. 
    area.innerHTML+=`arr.splice(2, 2, [추가값]) : ${arr.splice(2, 2)} <br><br>`;
    // area.innerHTML+=`arr.splice(2, 2, [추가값]) : ${arr.splice(2, 2, 'spring')} <br><br>`;
    // 아래의 경우 spice로 잘라내지 않고 그냥 추가만 시킨것임(이때는 delete count를 0으로 하면 됨)
    // area.innerHTML+=`arr.splice(2, 0, [추가값]) : ${arr.splice(2, 0, 'spring')} <br><br>`;
    area.innerHTML+=`arr : [${arr}] <br><br>`;
    
}