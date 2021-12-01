// Object 객체
let btn1=document.getElementById('btn1');
btn1.addEventListener('click', () => {
    // Object 객체 생성하는 방법
    let obj1={}; // 리터럴로 오브젝트 객체 생성
    let obj2= new Object(); //생성자 함수로 오브젝트 객체 생성
    let obj3={name: '홍길동', height: 165}; 

    console.log(obj1);
    console.log(obj2);
    
    console.log('---------------instanceof-----------------')
    console.log(obj1 instanceof Object); // 둘 다 오브젝트임
    console.log(obj2 instanceof Object);
    console.log('---------------hasOwnProperty-----------------')
    
    // hasOwnProperty : 매개값으로 전달되는 속성을 가지고 있는지 확인하는 메소드(true나 flase 리턴) 
    // ↑ 객체 안에 해당하는 속성 존재하는지 확인하는 메소드
    console.log(obj3.hasOwnProperty('name'));  //true
    console.log(obj3.hasOwnProperty('height')); //true
    console.log(obj3.hasOwnProperty('weight')); //false

    // for in 문을 통해 속성에 접근 가능 여부를 리턴한다. 
    console.log('---------------propertyIsEnumerable-----------------')
    console.log(obj3.propertyIsEnumerable('name'));
    
    for (const key in obj3) {
        console.log(`key : ${key}, value : ${obj3[key]}`);
    }

    console.log('--------------- enumerable: false(참고))-----------------')
    // 아래의 구문 실행 시 for in 문을 통해 접근이 불가능하게 만든다.(안씀)
    Object.defineProperty(obj3, 'name', { enumerable: false});

    for (const key in obj3) {
        console.log(`key : ${key}, value : ${obj3[key]}`);
    }
});


// Number 객체
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    let area = document.getElementById('area1');
    let num1 = 3141592;
    let num2 = Number(3.141592);
    let num3 = new Number(3.141592);

    // instanceof : 어떤 생성자로 만들었는지 반환해줌
    // typeof : 데이터 타입 반환해줌
    area.innerHTML+=`<mark>▶ num1의 값</mark> : ${num1},<br> 
    num1 instanceof Number : ${num1 instanceof Number},<br> 
    typeof(num1) : ${typeof(num1)}<br>`;

    area.innerHTML+=`<mark>▶ num2의 값</mark> : ${num2},<br> 
    num2 instanceof Number : ${num2 instanceof Number},<br> 
    typeof(num2) : ${typeof(num2)}<br>`;

    area.innerHTML+=`<mark>▶ num3의 값</mark> : ${num3},<br> 
    num3 instanceof Number : ${num3 instanceof Number},<br> 
    typeof(num3) : ${typeof(num3)}<br><br>`;

    // 지수 표기법으로 변경한 문자열을 리턴한다. 
    area.innerHTML += '<mark>▶ toExponential</mark> : 지수 표기법으로 변경한 문자열을 리턴<br>';
    area.innerHTML += `num1.toExponential : ${num1.toExponential()}<br>
    typeof(num1.toExponential) : ${typeof(num1.toExponential())}<br><br>`;
    
    // 숫자를 반올림하여 문자열로 리턴한다. (매개값에 값 주면 반올림 위치 지정됨)
    area.innerHTML += '<mark>▶ toFixed</mark> : 숫자를 반올림하여 문자열로 리턴<br>';
    area.innerHTML+=`num2.toFixed(2) : ${num2.toFixed(2)}<br>
    typeof(num2.toFixed(2)) : ${typeof(num2.toFixed(2))}<br><br>`;

    // 매개값으로 전달받은 자리수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 리턴한다. 
    area.innerHTML += '<mark>▶ toPrecision</mark> : 매개값으로 전달받은 자리수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 리턴<br>';
    area.innerHTML+=`num3.toPrecision() : ${num3.toPrecision()}<br>
    typeof(num3.toPrecision()) : ${typeof(num3.toPrecision())}<br>`;

    area.innerHTML+=`num3.toPrecision(4) : ${num3.toPrecision(4)}<br>
    typeof(num3.toPrecision(4)) : ${typeof(num3.toPrecision(4))}<br>`;
    
    area.innerHTML+=`num3.toPrecision(1) : ${num3.toPrecision(1)}<br>
    typeof(num3.toPrecision(1)) : ${typeof(num3.toPrecision(1))}<br>`;

    
    area.innerHTML+=`num1.toPrecision(1) : <mark>${num1.toPrecision(1)}</mark><br>
    typeof(num1.toPrecision(1)) : ${typeof(num1.toPrecision(1))}<br>`;
});

// String 객체
let btn3=document.getElementById('btn3');
btn3.addEventListener('click', ()=>{
    let area=document.getElementById('area2');
    let str1='javascript';
    let str2=new String('javascript');

    console.log(str1);
    console.log(str2);
    
    // 문자열을 태그로 감싸는 메소드
    area.innerHTML+=`▶ 기본값 : ${str1}<br><br>`;
    area.innerHTML+=`▶ str1.bold() : ${str1.bold()}<br>`;
    area.innerHTML+=`▶ str1.italics() : ${str1.italics()}<br>`;
    area.innerHTML+=`▶ str1.fontcolor('red') : ${str1.fontcolor('red')}<br>`;
    area.innerHTML+=`▶ str1.link('링크') : ${str1.link('https://www.naver.com')}<br>`;
});

// Date 객체
let btn4=document.getElementById('btn4');
btn4.addEventListener('click', ()=>{
    let area=document.getElementById('area3');
    // Date객체를 생성하는 방법
    let date1=new Date();
    // 밀리세컨드단위로 날짜 계산 : 원래 00시이지만 대한민국 표준시로 바뀌어서 9시뜸
    let date2=new Date(1);
    let date3=new Date('2021/11/11/09:28:00');
    let date4=new Date(2021, 10, 11, 9, 31, 59); //월은 0부터 시작

    console.log(date1);

    area.innerHTML=`<mark style="background-color: lightpink;">[ date 객체 확인 ]</mark><br>`;
    area.innerHTML+=`▶ <mark>date1</mark> : ${date1}<br>`;
    area.innerHTML+=`▶ <mark>date2</mark> : ${date2}<br>`;
    area.innerHTML+=`▶ <mark>date3</mark> : ${date3}<br>`;
    area.innerHTML+=`▶ <mark>date4</mark> : ${date4}<br><br>`;
    
    // date 객체의 메소드 호출
    area.innerHTML+=`<mark style="background-color: lightpink;">[ date 객체의 메소드 호출(date1) ]</mark><br>`;
    area.innerHTML+=`▶ <mark>getFullYear()</mark> : ${date1.getFullYear()}<br>`;
    area.innerHTML+=`▶ <mark>getMonth()</mark> : ${date1.getMonth()}<br>`;//월은 0부터 시작
    area.innerHTML+=`▶ <mark>getDate()</mark> : ${date1.getDate()}<br>`;
    area.innerHTML+=`▶ <mark>getDay()</mark> : ${date1.getDay()}<br>`; // 0: 일요일, 6: 토요일
    area.innerHTML+=`▶ <mark>getHours()</mark> : ${date1.getHours()}<br>`;
    area.innerHTML+=`▶ <mark>getMinutes()</mark> : ${date1.getMinutes()}<br>`;
    area.innerHTML+=`▶ <mark>getSeconds()</mark> : ${date1.getSeconds()}<br>`;
    area.innerHTML+=`▶ <mark>getMilliseconds()</mark> : ${date1.getMilliseconds()}<br><br>`;
    
    area.innerHTML+=`<mark style="background-color: lightpink;">[ date 객체의 메소드 호출2 ]</mark><br>`;
    // 1970년 1월1일00시를 기준으로 현재 시간에 대한 밀리 세콘드 값을 반환한다. 
    area.innerHTML+=`▶ <mark>getTime()</mark> : ${date1.getTime()}<br>`;
    // 표준시와 Date객체에 지정된 로컬 시간과의 차이를 분 단위로 반환한다. 
    area.innerHTML+=`▶ <mark>getTimezoneOffset()/60</mark> : ${date1.getTimezoneOffset()/60}<br>`; // 표준시-로컬시간=분단위
    area.innerHTML+=`▶ <mark>toDateString()</mark> : ${date1.toDateString()}<br>`;
    area.innerHTML+=`▶ <mark>toTimeString()</mark> : ${date1.toTimeString()}<br>`;
    area.innerHTML+=`▶ <mark>toUTCString()</mark> : ${date1.toUTCString()}<br>`;
    area.innerHTML+=`▶ <mark>toISOString()</mark> : ${date1.toISOString()}<br>`;
    area.innerHTML+=`▶ <mark>toLocaleString()</mark> : ${date1.toLocaleString()}<br>`;
    area.innerHTML+=`▶ <mark>toLocaleDateString()</mark> : ${date1.toLocaleDateString('en-US')}<br>`;
    area.innerHTML+=`▶ <mark>toLocaleTimeString()</mark> : ${date1.toLocaleTimeString('en-US')}<br>`;
    area.innerHTML+=`▶ <mark>toLocaleString('en-US')</mark> : ${date1.toLocaleString('en-US')}<br>`;
});