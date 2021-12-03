// 이벤트 모델의 종류
// 1) 고전 이벤트 모델
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');

btn1.onclick = () =>{
    alert('btn1이 클릭되었습니다.');
};

btn2.onclick = () =>{
    alert('btn2이 클릭되면서 btn1의 이벤트를 제거하였습니다.');
    btn1.onclick=null;
};

// 2) 인라인 이벤트 모델
function test1(){
    alert('감자에 싹이나서 감자깡');
}

// 3) 표준 이벤트 모델 
let btn3=document.getElementById('btn3');

btn3.addEventListener('click', clickEventHandler);
// clickEventHandler() 이렇게 전달하면 함수가 호출되어 창 열자마자 알림이 뜨고 그 결과인 undefined를 전달해줌.  
// ★중요★콜백함수로 전달하려면 함수명(clickEventHandler)만 전달해야 한다. 
// 함수명은 함수에 대한 식별자 역할, 그 함수에 대한 정보를 가지고 있다. 
btn3.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor='red';
    console.log(event);
});
btn3.addEventListener('mouseout', (event)=>{
    event.target.style.backgroundColor='green';
    console.dir(event);
});

function clickEventHandler(){
    alert('표준 이벤트 모델');
    // 리턴해주는게 없다. 그러면 리턴값은 undefined임.
    // 콜백함수로 전달하려면 함수의 내용을 전달해야함.  
};

// 이벤트가 발생한 해당 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
let btn4=document.getElementById('btn4');
btn4.onclick=function(event){
    console.log(event.target);
    console.log(window.event.target);
    console.log(this);
};

btn4.onclick=(event)=>{
    console.log(event.target);
    console.log(window.event.target);
    // console.log(this);
};

// 2) 인라인 방식
function test2(event){
    console.log(event); // 매개값으로 이벤트 객체를 가져올 수 없다.
    console.log(window.event.target); // 
    console.log(this); // winodw 객체를 가리킨다. 
};

// 3) 표준 이벤트 방식
let btn5=document.getElementById('btn5');
// btn5.addEventListener('click', function(event){
//     console.log(event.target); 
//     console.log(window.event.target);  
//     console.log(this);  
// });

btn5.addEventListener('click', (event)=>{
    console.log(event.target); 
    console.log(window.event.target);  
    // console.log(this);  
});

// 태그 별 기본적으로 가지고 있는 이벤트 제거
// 1) 기본 이벤트 제거1
function test3(){
    let pass1=document.getElementById('pass1').value;
    let pass2=document.getElementById('pass2').value;

    console.log(pass1);
    console.log(pass2);

    if(pass1!=pass2){
        alert('비밀번호가 일치하지 않습니다.');
        return false; 
        // 서버로 값 전송 안하게 하기 위해서 씀
    }
};

// 2) 기본 이벤트 제거2
let submit=document.getElementById('submit');
// Submit.onclick=()=>{
//     alert('아이디를 정상적으로 입력해주세요.');
//     return false;
// }

submit.addEventListener('click', (event)=>{
    // 영문자, 숫자로만 총 5~12자 사이로 입력해 주세요.
    let userId = document.getElementById('userId').value;
    let regExp=/^[a-zA-z0-9]{5,12}$/;
    // 정규표현식 : 가독성이 좋지 않다, 

    console.log(userId);
    // if(false){
    //     alert('아이디를 정상적으로 입력해주세요.');
    //     event.preventDefault();
    // }else if(userId.length >= 5 || userId.length<=12){
    //     alert('정답');
    // }else if(userId<65){ 
    //     // 아스키 코드로 어떻게 하면 될것도 같은데 ..
    //     alert('영어 아니잖아!')
    // }

    if(!regExp.test(userId)){
        alert('아이디를 정상적으로 입력해주세요.');
        event.preventDefault();
    }
});