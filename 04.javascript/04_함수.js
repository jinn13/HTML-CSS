// 함수 선언
// 1) 선언적 함수 
function test1(){
    alert('test1 함수 실행');
}

// 2) 익명 함수
// 함수명 작성 안하고 실행
let btn1=document.getElementById('btn1');
btn1.addEventListener('click', function(){
    alert('익명 함수 실행(이벤트 핸들러를 통해 실행)');
});

// 3) 스스로 실행하는 함수
(
    function(a, b){
        document.getElementById('p1').innerHTML=`a : ${a}, b : ${b} (자동으로 혼자 실행)`;
    }(10, 20)
);

// 대부분은 window.onload로 넣어주거나 jQuery에서 $document.ready로 정의해서 하는데, 
// 가끔 실무에서 아래처럼 쓰는분들 있음. 참고하기!
(
    function(a, b){
        document.getElementById('p1').innerHTML=`a : ${a}, b : ${b} (자동으로 혼자 실행)`;
    }
)(10, 20);

// 함수의 매개변수
// 1) 매개변수
let btn2=document.getElementById('btn2');

// 이 요소에 대해서 이벤트 리스너를 추가할 것임(공홈에 가면 어떤 이벤트 있는지 알수있음)
btn2.addEventListener('click', /*매개값이 없을땐 괄호 꼭 넣기*/(e)=>{
    console.log(this);

    // console.log(arguments); 화살표 함수는 argumnets를 생성하지 않는다. 
    console.log(e.target);
    argTest();
    // argTest('안녕하세요.')
    // argTest('안녕하세요.', '반갑습니다.');
});


// 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다. (ES6부터 추가)
function argTest(value='매개값 없음'){
    alert(value);
}




//2) arguments
let btn3=document.getElementById('btn3');

btn3=addEventListener('click', () => {
    // let result = 0;
    // // result = sum(11, 22, 33, 44);
    // result = sum(125, 600);
    // alert(`sum : ${result}`)
});

function sum(){
    let result=0;
    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof(arguments));

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


//3) 매개변수에 this 요소 전달하기

//이벤트 핸들러로 가져올때는..이렇게 this로 가져온다..?
function thisTest(element){
    console.log(this); // window 객체 (함수나 전역변수는 window에 포함되기에 widonw가 찍힘)
    console.log(element); // 이벤트가 발생했을 때의 이벤트가 발생한 요소
}
console.log(function(){});
console.log(()=>{})
//프로토타입이란게 있어요. ...저 위의 두개가 동작방식이 다르다.(어려우니 이건 우선 나중에..)


// 함수의 리턴
// 1) 일반적인 값 리턴
function returnTest(){
    let random=ran();
    alert(`random : ${random}`)
}

function ran(){
    return parseInt(Math.random()*100+1);
}

// 2) 익명함수를 리턴하는 함수
let btn4=document.getElementById('btn4');
btn4.addEventListener('click', ()=>{
    // 익명함수를 변수에 담아서 실행시키려면? 아래처럼 한다. 
    // let func=returnTest2();
    // func();

    // 이건 바로 호출하는 방법. 
    returnTest2()();
});

function returnTest2(){
    // 클로저
    //  - 내부 함수가 사용하는 외부함수의 지역변수는 내부함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다. 
    let userName=document.getElementById('userName').value;

    return function(){
        alert(userName+'님 환영합니다.');
    }
}

// 내장함수
// 1) eval() 
let btn5=document.getElementById('btn5');
btn5.addEventListener('click', ()=>{
    let p2=document.getElementById('p2');
    let calc=document.getElementById('calc');

    p2.innerHTML+=`실제 입력된 값 : ${calc.value} <br>`;
    p2.innerHTML+=`eval() 후 : ${eval(calc.value)} <br>`;

});