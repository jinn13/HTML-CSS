// 1. 변수와 자료형
// 1) 변수 테스트
// 전역 변수 선언

str1='전역변수';
// 함수 외부에 선언한 변수는 var를 붙여도 전역변수이다. 
var str2='var 전역변수';

// console.log(str1);
// console.log(str2);

// 자바스크립트에서 페이지가 모두 로드되면 그때 자동으로 실행되는 함수를 구현 시 사용한다. 
// on으로 시작하는 애들은 다 이벤트라고 보면 된다. 
window.onload=function(){
    var str1='지역변수1'; 
    var str3='지역변수2';
    var str4;

    console.log(str1); // 지역변수 1
    console.log(this.str1); // 전역변수
    console.log(window.str1); //전역변수

    console.log(str2); // var 전역변수
    console.log(this.str2); // var 전역변수
    console.log(window.str2); // var 전역변수
    
    console.log(str3); // 지역변수2
    console.log(this.str3); // undefined
    console.log(window.str3); // undefined
    
    console.log(str4); // undefined   

    console.log('-----------------------------------');

    // var, let, const
    // 1) 중복선언
    // 중복선언이 가능하고 마지막 값이 저장된다. 
    var num=0;
    console.log(num);

    var num=10;
    console.log(num);

    var num=20;
    console.log(num);

    let num2=10;
    console.log('num2');

    // let num2=20;
    // console.log('num2');
    
    const num3=10;
    console.log('num3');

    // const num3=20;
    // console.log('num3');

    // num3=20; // 값의 재할당이 불가능하다. 상수니까!

    console.log('-----------------------------------');
    // 2) 유효 범위(스코프)
    // 함수 안에서 var키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    if(true){
        var num4=10;

        console.log(num4);
    }

    console.log(num4);

    // 함수 안에서 let, const키워드로 선언된 변수는 블록 유효 범위를 갖는다. 
    if(true){
        let num5=20;
        const num6=20;

        console.log(num5);
        console.log(num6);
    }
    // console.log(num5);
    // console.log(num6);
}

// 2) 자료형 테스트
function typeTest(){
    let name='감자'; // 문자열
    let age=500; // 숫자
    let height = 183.5; //숫자
    let check = true; // 논리값
    let hobbies=['축구', '야구', '농구']; // 배열
    // 자바에서 {}는 배열이지만 자스에서는 객체 만들때 쓴다. 
    let user={
        // 객체 속성값은 :로 구분해야한다. =은 X
        name: '당근',
        age: 20,
        height: 160.2,
        id: 'carrot',
        hobbies
        // hobbies: ['축구', '야구', '농구']
        // hobbies: hobbies
    }; // 객체
    let testFunction=function(num1, num2){
        // console.log(num1, num2);
        alert(num1+num2);
    }

    // testFunction(10, 20);
    // testFunction();

    // console.log(hobbies);
    // console.log(user);
    // console.log(testFunction);

    // typeof() 연산자
    // 값의 자료형을 확인하는 연산자로
    //변수 선언 시 자료형을 지정하지 않기 때문에 변수 명만으로는 데이터의 자료형을 확인할 수 없다. 
    // 따라서 변수의 자료형을 확인하려면 typeof() 연산자를 사용해야 한다. 

    let area=document.getElementById('area1');
    // area.innerHTML = '<h4>안녕하세요.</h4>';
    area.innerHTML='<h4>안녕하세요.</h4>';
    area.innerHTML+=`${name}, ${typeof(name)} <br>`;
    area.innerHTML+=`${age}, ${typeof(age)} <br>`;
    area.innerHTML+=`${height}, ${typeof(height)} <br>`;
    area.innerHTML+=`${check}, ${typeof(check)} <br>`;
    area.innerHTML+=`${hobbies}, ${typeof(hobbies)} <br>`;
    area.innerHTML+=`${user}, ${typeof(user)} <br>`;
    area.innerHTML+=`${testFunction}, ${typeof(testFunction)} <br>`;
}


function opTest(){
    // Infinity : 수를 표현하는 특정 값(문자데이터도 아니고.. 숫자도 아니고..)
    // Infinity : 양의 무한대
    // -Infinity :  음의 무한대
    // NaN : 산술 연산 불가, 수를 표현하는 특정값. 
    let num1=10/0;
    let num2=10/'a';
    let area=document.getElementById('area2');
    area.innerHTML=`10/0 : ${num1}<br>`;
    area.innerHTML+=`10/a : ${num2}<br>`;
    area.innerHTML+=`num1==Infinity : ${num1===Infinity}<br>`;
    area.innerHTML+=`isFinite(num1) : ${isFinite(num1)}<br>`;
    // area.innerHTML+=`num2==NaN : ${num2==NaN}<br>`; // isNaN으로 판별해야 한다.
    area.innerHTML+=`isNaN(num2) : ${isNaN(num2)}<br>`;
}
// ----------------------------------------
// 2. 데이터 형 변환
// 1) 문자열과 숫자의 '+' 연산
function testPlus(){
    let test1=7+7; // 14
    let test2=7+'7'; // '77'
    let test3='7'+7; // '77'
    let test4='7'+'7'; // '77'
    let test5=7+7+'7'; //'147'
    let test6=7+'7'+7; // '777'
    let test7='7'+7+7; // '777'
    let test8='7'+(7+7); // '714' 
    let test9=7*'7'; // 49 
    let test10='7'-3; // 4
    let test11=4/'2'+3; // 5
    let test12='3'*'7' // 21
    let test13='3'*'a' // nan

    let area = document.getElementById('area3');
    area.innerHTML=`test1 : ${test1} (${typeof test1}) <br>`;
    area.innerHTML+=`test2 : ${test2} (${typeof test2}) <br>`;
    area.innerHTML+=`test3 : ${test3} (${typeof test3}) <br>`;
    area.innerHTML+=`test4 : ${test4} (${typeof test4}) <br>`;
    area.innerHTML+=`test5 : ${test5} (${typeof test5}) <br>`;
    area.innerHTML+=`test6 : ${test6} (${typeof test6}) <br>`;
    area.innerHTML+=`test7 : ${test7} (${typeof test7}) <br>`;
    area.innerHTML+=`test8 : ${test8} (${typeof test8}) <br>`;
    area.innerHTML+=`test9 : ${test9} (${typeof test9}) <br>`;
    area.innerHTML+=`test10 : ${test10} (${typeof test10}) <br>`;
    area.innerHTML+=`test11 : ${test11} (${typeof test11}) <br>`;
    area.innerHTML+=`test12 : ${test12} (${typeof test12}) <br>`;
    area.innerHTML+=`test13 : ${test13} (${typeof test13}) <br>`;
}


function castingTest(){
    let area=document.getElementById('area4');

    area.innerHTML=`숫자 + 문자 = ${2 + '3'} <br>`;
    area.innerHTML+=`숫자 + Number(문자) = ${2 + Number('3')} <br>`;
    area.innerHTML+=`String(숫자) + Number(문자) = ${String(2) + Number('3')} <br>`;
    area.innerHTML+=`숫자 + parseInt(문자) = ${2 + parseInt('3')} <br>`;
    area.innerHTML+=`숫자 + parseFloat(문자) = ${2 + parseFloat('3')} <br>`;
    area.innerHTML+=`parseInt(16진수, 숫자) = ${parseInt('0xff', 16)} <br>`;
}

function opTest2(){
    let area=document.getElementById('area5');

    area.innerHTML='<mark>▶ "=="연산자 테스트 ◀</mark> <br>' ;
    area.innerHTML+=`'7'==7 : ${'7'==7} <br>`;
    area.innerHTML+=`'7'=='7' : ${'7'=='7'} <br>`;
    area.innerHTML+=`7==7 : ${7==7} <br>`;
    area.innerHTML+=`'7'!=8 : ${'7'!=8} <br>`;
    area.innerHTML+=`'7'!='8' : ${'7'!='8'} <br>`;
    area.innerHTML+=`7!=8 : ${7!=8} <br>`;
    // area.innerHTML+='<br>';
    area.innerHTML+='<mark style="background-color: aquamarine;">▶ "==="연산자 테스트 ◀</mark><br>' ;
    area.innerHTML+=`'7'===7 : ${'7'===7} <br>`;
    area.innerHTML+=`'7'==='7' : ${'7'==='7'} <br>`;
    area.innerHTML+=`7===7 : ${7===7} <br>`;
    area.innerHTML+=`'7'!==8 : ${'7'!==8} <br>`;
    area.innerHTML+=`'7'!=='8' : ${'7'!=='8'} <br>`;
    area.innerHTML+=`7!==8 : ${7!==8} <br>`;
}

function forInTest(){
    let result='';
    let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // array도 객체인데, key라고 부르는 이유가 객체인것과 연관. 
    // 나중에 설명예정

    for (const i in array) {
        // 반복 변수에 array의 index를 순서대로 i에 담아서 반복시킨다. 
        // console.log(index);
        console.log(array[i]);
        result+=array[i] + ' ';

    }
    alert(result);
}

