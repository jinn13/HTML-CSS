// 텍스트 노드가 있는 요소 노드 생성
let btn1=document.getElementById('btn1');
btn1.addEventListener('click', ()=>{
    // element 생성
    let title=document.createElement('h3');

    // 텍스트 노드 생성
    let textNode=document.createTextNode('안녕하세요');
    title.setAttribute('id', 'aa');

    title.appendChild(textNode);
    document.getElementById('area1').appendChild(title);
    // 맨 처음 dom이 아니고, 우리가 element랑 텍스트노드 만들어 추가시켜준 것임
    document.getElementById('area1').innerHTML+='<h3>안녕</h3>';
});

// 텍스트 노드가 없는 요소 노드 생성
let btn2=document.getElementById('btn2');
btn2.addEventListener('click', ()=>{
    // element  생성
    let img=document.createElement('img');

    // 속성 지정
    img.src='../resources/image/flower1.PNG';
    img.setAttribute('width', '150px');
    img.setAttribute('height', '100px');
    img.setAttribute('myAttr', 'p123');

    document.getElementById('area2').appendChild(img);

    document.getElementById('area2').innerHTML+=
    '<img src="../resources/image/flower2.PNG" width="150px" height="100px" myAttr="p123">';
// 문자열이라고 인식시켜주려고 쌍 따옴표로 넣은거에요~
});

// Node 객체 삭제
let btn3=document.getElementById('btn3');
btn3.addEventListener('click', (event)=>{
    document.getElementById('area1').remove();
    document.body.removeChild(document.getElementById('area2'));
    event.target.parentNode.removeChild(document.getElementById('area3'));
});