function external() {
    var result = add(10, 20);
    console.log('result : ' + result);
}


function add(x, y){
    console.log('01_개요.js의 add() 호출');
    return x+y
}

// 반환형도 없고 매개값도 없고..
// 이런 방식으로도 가능, 대입될때 값이 자동으로 정해짐
// var a=''; // string
// a=3; // number
// a=false; 

// var name;
// name='이름1';
// console.log(name);
// name='이름2';
// console.log(name);
// name='이름3';
// console.log(name);