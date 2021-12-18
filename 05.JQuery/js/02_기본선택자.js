// $(document).ready(()=>{}); 이렇게도 가능
// 버릇처럼 아래형식으로 쓰자. 
$(document).ready(function(){
    // 1. 아이디 선택자
    //  1) 순수한 자바스크립트(DOM이 먼저 그려진 다음 적용된다.)
    let id1=document.getElementById('id1');
    id1.style.color='red'; // 요소의 속성을 통해서 접근 후 수정

    // 2) jQuery를 활용한 방식
    // css와 동일하게 id로 가져올땐 #을 쓴다.
    let id2=$('#id2');
    id2.css('color', 'rgb(20, 30, 200)'); //메소드를 통해서 접근 후 수정한다.

    // 2. 태그 선택자
    // //  1) 순수한 자바스크립트 
    // let p=document.getElementsByTagName('p'); // 배열 객체(요소를 담고 있는)를 리턴한다. 
    // // 배열이기 때문에 반복문을 사용해서 각 요소에 접근한다. 
    // for (const index in p) {
    //     p[index].style.color='beige';
    //     p[index].style.backgroundColor='salmon';
    // }




    //  2) jQuery를 활용한 방식
    let h5=$('h5');
    h5.css('color', 'white');
    h5.css('background-color', 'yellowgreen'); 
    // 카멜케이스도 되고, CSS속성대로 -color쓰던 다 된다.



    // 3. class 선택자
    //  1) 순수한 자바스크립트 
    // let items = document.getElementsByClassName('item'); // 배열을 리턴한다.
    // for (const index in items) {
    //     items[index].style.color='orange';
    // }

    // 2)  jQuery를 활용한 방식
    $('.item').css('color', 'hotpink');
    // let item=$('.item');
    // item.css('color', 'hotpink');
});