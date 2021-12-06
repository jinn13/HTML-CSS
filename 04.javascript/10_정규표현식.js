// 정규 표현식 객체 생성
let btn1=document.getElementById('btn1');
btn1.addEventListener('click', ()=>{
    let area=document.getElementById('area1');
    // 생성자 함수를 이용한 정규 표현식 객체 생성
    let regExp=new RegExp('script'); // 생성자에 매개값으로 패턴을 문자열로 지정한다. 

    // 리터럴을 이용한 정규 표현식 객체 생성
    let regExp2=/script/; // 패턴 양쪽에 /로 작성한다.(시작기호, 종료기호)
    let str='javascript jqueryscript ajax';
    let str2='java jquery ajax';

    console.dir(regExp, typeof(regExp));
    console.dir(regExp2, typeof(regExp2));

    /*
        RegExp 객체에서 제공하는 메소드
            객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴
            객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열을 리턴한다.

        String 객체에서 정규 표현식 객체를 이용하는 메소드
            문자열.match(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴한다. 
            문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀 값으로 변경한다.(가장 첫번째만!)
            문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴한다. 
            문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성하고 리턴한다. 
    
    */
    area.innerHTML='<h3>정규 표현식 객체 생성</h3>'
    area.innerHTML+=`<b>[ RegExp 객체에서 제공하는 메소드 ]</b><br>`;
    // test : 패턴을 만족하는게 있다면 true, 아니면 false(아래는 script가 없어서 false뜸)
    area.innerHTML+=`<b>▶ test</b><br>`;
    area.innerHTML+=`regExp.test(str) : ${regExp.test(str)} <br>`;
    area.innerHTML+=`regExp.test(str2) : ${regExp.test(str2)} <br><br>`;
    // exec : 매개값으로 들어온 문자열에 만족하는 값이 있으면 맨 처음 찾은 애를 return해줌
    // 만족하는 애가 없으면 null
    area.innerHTML+=`<b>▶ exec</b><br>`;
    area.innerHTML+=`regExp.exec(str) : ${regExp.exec(str)} <br>`;
    area.innerHTML+=`regExp.exec(str2) : ${regExp.exec(str2)} <br><br>`;
    
    
    // String 객체에서 정규 표현식 객체를 이용하는 메소드
    area.innerHTML+=`<b>[ String 객체에서 정규 표현식 객체를 이용하는 메소드 ]</b><br>`;
    area.innerHTML+=`str.match(regExp) : ${str.match(regExp)}<br>`;
    area.innerHTML+=`str.replace(regExp, '스크립트') : ${str.replace(regExp, '스크립트')}<br>`;
    area.innerHTML+=`str.search(regExp) : ${str.search(regExp)}<br>`;
    area.innerHTML+=`str.split(regExp) : ${str.split(regExp)}<br>`;

    console.log(str.split(regExp));
});

// 플래그 문자
let btn2=document.getElementById('btn2');
btn2.addEventListener('click', ()=>{
    let area=document.getElementById('area2');
    let str='JAvaScript jQuery Ajax';
    let regExp=/a/;
    let regExp1=/a/i;
    let regExp2=/a/g;
    let regExp3=/a/ig;
    let regExp4=/a/gi;

    area.innerHTML='<h3>플래그 문자</h3>';
    // '$&'는 패턴을 만족하는 문자열을 가리킨다. 
    area.innerHTML+=`/a/ : ${str.replace(regExp, '($&)')} <br>`;
    // 첫 소문자 a가 바뀌었다. 
    area.innerHTML+=`/a/i : ${str.replace(regExp1, '($&)')} <br>`;
    // 첫 대문자 A가 바뀌었다. 
    area.innerHTML+=`/a/g : ${str.replace(regExp2, '($&)')} <br>`;
    // 소문자 a가 전부 다 바뀌었다. 
    area.innerHTML+=`/a/gi : ${str.replace(regExp3, '($&)')} <br>`;
    area.innerHTML+=`/a/ig : ${str.replace(regExp4, '($&)')} <br>`;
    // g랑 i둘다 쓸수도 있고 순서 상관없음. 결과는 같다. 

    let str2=str.replace(regExp4, (match)=>{
        return '+' + match + '+';
    });

    console.log(str2);
});

// 메타 문자
let btn3=document.getElementById('btn3');
btn3.addEventListener('click', ()=>{
    let area=document.getElementById('area3');
    let str=''
    let regExp;

    // 반복 검색
    // {m, n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다. 
    // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. 
    // ?는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다. 

    str='a aa acc aaaa';
    regExp=/a{1,2}/g;
    area.innerHTML='<h3>반복 검색</h3>';
    area.innerHTML+=`/a{1,2}/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp=/a{3}/g; // {3,3}
    area.innerHTML+=`/a{3}/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp=/a{2,}/g; // 앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다. // 최소 2개만 만족하면 된다, 다 만족이 되서.. 친환된다. 
    area.innerHTML+=`/a{2,}/g : ${str.replace(regExp, '($&)')}<br>`;
    
    regExp=/a+/g; // {1,}
    area.innerHTML+=`/a+/g : ${str.replace(regExp, '($&)')}<br>`;

    regExp=/a?/g; // {0,1} // 최대가 0개, 
    area.innerHTML+=`/a?/g : ${str.replace(regExp, '($&)')}<br><br>`;

    // 앵커문자
    // 문자열의 앞과 뒤를 구분해주는 정규 표현식 기호

    // ^ 는 문자열의 시작을 의미한다. 
    // $ 는 문자열의 마지막을 의미한다. 
    str='Javascript\nJquery\nShellscript\nAjax';
    area.innerHTML+='<h3>문자열의 앞, 뒤 구분</h3>';
    regExp=/^j/ig; 
    area.innerHTML+=`/^j/ig: ${str.replace(regExp, '($&)')}<br>`;
    regExp=/^j/igm; 
    area.innerHTML+=`/^j/igm: ${str.replace(regExp, '($&)')}<br>`;
    regExp=/ipt$/igm; 
    area.innerHTML+=`/ipt$/igm: ${str.replace(regExp, '($&)')}<br>`;

    // OR 검색
    // [...] 내의 문자 중 하나라도 존재할 경우 
    area.innerHTML+=``;
    str='Javascript\nJquery\nAjax';
    regExp=/[aj]/ig; 
    area.innerHTML+='<h3>OR 검색</h3>';
    area.innerHTML+=`/[aj]/ig: ${str.replace(regExp, '($&)')}<br>`;
    
    // ^의 경우 대괄호 안에서 쓰일 경우 not의 경우
    regExp=/[^aj]/ig;  // [...] 내의 ^은 not의 의미를 가진다.(주의)
    area.innerHTML+=`/[^aj]/ig: ${str.replace(regExp, '($&)')}<br>`;
    
    regExp=/^[aj]/igm; // a나 j로 시작하는 애를 찾으려면 대괄호 바깥에 ^두기!
    area.innerHTML+=`/^[aj]/ig: ${str.replace(regExp, '($&)')}<br>`;
    
    str='123 Javascript,';
    regExp=/[a-z]/g; // 범위를 지정하려면 [..]내에 -를 사용한다.  // 숫자랑 대문자 j 제외됨
    // 만약 대문자까지 포함하고 싶다면 i를 붙여주면 된다. 
    area.innerHTML+=`/[a-z]/g: ${str.replace(regExp, '($&)')}<br>`;
    
    regExp=/[0-9A-Z]/g; // , 넣을경우 되는데.. 이건 ,도 문자열로 인식해서 그런것임. ,도 표시됨
    area.innerHTML+=`/[0-9]/g: ${str.replace(regExp, '($&)')}<br>`;
    
    // 임의의 문자열 검색
    // .은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다. 
    area.innerHTML+='<h3>임의의 문자열 검색</h3>';
    regExp=/..../g; //어떤 문자열이든 4개씩 묶어줌, 공백도 문자. 
    area.innerHTML+=`/..../g: ${str.replace(regExp, '($&)')}<br>`;
});
    
    // 추가 메타 문자
    let btn4=document.getElementById('btn4');
    btn4.addEventListener('click', ()=>{
        let regExp;
        let str='';
        let area=document.getElementById('area4');
        
        /*
            \d :  숫자를 의미한다. 
            \D : 숫자가 아닌 문자를 의미한다.
            \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다.
            \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다.
            \s : 공백 문자를 의미한다.(띄어쓰기, 탭, 줄바꿈)
        */

        str='A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\n나\n다';
        regExp=/\d/g; // [0-9]/g와 결과가 같다.
        
        area.innerHTML=`<h3>추가 메타 문자</h3>`;
        area.innerHTML+=`/\\d/g: ${str.replace(regExp, '($&)')}<br>`;
        
        regExp=/\D/g; // [^0-9]/g와 결과가 같다.
        area.innerHTML+=`/\\D/g: ${str.replace(regExp, '($&)')}<br>`;

        regExp=/\w/g; // [0-9a-zA-Z_]/g와 결과가 같다.
        area.innerHTML+=`/\\w/g: ${str.replace(regExp, '($&)')}<br>`;

        regExp=/\W/g; // [^0-9a-zA-Z_]/g와 결과가 같다.
        area.innerHTML+=`/\\W/g: ${str.replace(regExp, '($&)')}<br>`;

        regExp=/\s/g; // /[ \n\t]/g 와 결과가 같다. (공백문자들)
        area.innerHTML+=`/\\s/g: ${str.replace(regExp, '($&)')}<br>`;

        regExp=/\S/g; // /[^ \n\t]/g 와 결과가 같다. (공백문자들)
        area.innerHTML+=`/\\s/g: ${str.replace(regExp, '($&)')}<br>`;
    });
