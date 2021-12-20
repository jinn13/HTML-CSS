$(document).ready(()=>{
    // 1. Content 관련 메소드
    //  1) html()
    console.log(`$('#content1').html() : ${$('#content1').html()}`);
    $('#content2').html($('#content1').html());
    console.log(`$('#content2').html() : ${$('#content2').html()}`);
    $('#content2').children('a').attr('href', 'https://www.naver.com');
    
    console.log(`$('.content').html() : ${$('.content').html()}`);
    
    $('.content').html((index, content)=>{
        console.log(index, content);
        
        return `<h1>인덱스 ${index}, 내용 : ${content}</h1>`;
    });
    
    // $('.content').html('ㅋㅋㅋㅋ');
    
    //   2) text() 메소드
    console.log(`$('#content3').text() : ${$('#content3').text()}`);
    $('#content4').text($('#content3').text());
    console.log(`$('.content4').text() : ${$('.content4').text()}`);

    // 매개값은 뭐가 들어가도 되네...
    $('.content2').text((인덱스, 값)=>{
        console.log(인덱스, 값);
        return `<h1>인덱스 ${인덱스}, 내용 : ${값}</h1>`;
    });

    // let c1=document.getElementById(content1);
    // let c2=document.getElementById(content2);
    // console.log(c2);
    // console.log(c1);


    // 2. 요소 생성 및 제거 메소드
    //  1) 요소 생성
    // 문자열로 요소를 생성하는 방법
    let p1='<p>문자열로 요소를 생성</p>';
    
    // 자바스크립트로 DOM 메소드로 생성하는 방법
    let p2=document.createElement('p');
    let textNode=document.createTextNode('DOM 메소드로 요소를 생성');
    p2.appendChild(textNode);

    // jQuery로 요소 생성하는 방법1
    let p3=$('<p>').text('jQuery로 요소 생성');
    
    // jQuery로 요소 생성하는 방법2
    let p4=$('<p>jQuery로 요소를 생성 2</p>');

    
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);

    $('#area1').append(p1, p2, p3, p4);

    // 2-1) 요소 추가1
    //$(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷 부분에 추가한다. 
    $('#add1').append('<span>B</span>');
    //$(A).prepend(B) : A 요소의 자식 요소로 B 요소를 앞 부분에 추가한다. 
    $('#add2').prepend('<span>B</span>');
    //$(A).after(B) : A 요소의 형제 요소로 B 요소를 뒷부분에 추가한다.  
    $('#add3').after('<span>B</span>');
    //$(A).before(B) : A 요소의 형제 요소로 B 요소를 앞부분에 추가한다.  
    $('#add4').before('<span>B</span>');
    
    // 2-2) 요소 추가 2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 뒷부분에 추가한다. (위랑 순서가 다르다.)
    $('<span>B</span>').appendTo('#add5');
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 앞부분에 추가한다. 
    $('<span>B</span>').prependTo('#add6');
    // $(A).insertAfter(B) : A 요소를 B 요소의 형제 요소로 뒷부분에 추가한다. 
    $('<span>B</span>').insertAfter($('#add7')); // 이렇게 요소를 직접적으로 넣는것도 가능
    // $(A).insertBefore(B) : A 요소를 B 요소의 형제 요소로 앞부분에 추가한다. 
    $('<span>B</span>').insertBefore('#add8');

    // 3. 요소 복제 메소드
    $('#item1').hover(
    //     ()=>{
    //         // 선택된 요소에 클래스 속성값을 추가하는 메소드
    //         $('#item1').addClass('bg-hotpink');
    //         console.log('#item1');
    //     },
    //     // 선택된 요소에 클래스 속성값을 제거하는 메소드
    //     ()=>{
    //         $('#item1').removeClass('bg-hotpink');
    // });

    // 하나의 콜백함수를 줄 경우 이 콜백함수 하나만 동일하게 호출된다. 
    (event)=>{
        console.log(event);
        // 선택된 요소에 클래스 속성값을 추가/제거하는 메소드
        $(event.target).toggleClass('bg-hotpink');
    });

    // 버튼 클릭 시 요소를 복제
    $('#btn1').click(()=>{
        // 이벤트까지 복제하려면 매개값으로 true를 전달한다. (생략 시 false)
        let copyItem=$('#item1').clone(true);
        // $('#clone-result').append(copyItem);

        // $('#item1') 요소의 위치가 이동된다. 
        $('#clone-result').append($('#item1'));
    });

    // 4. 요소 제거 메소드
    // 제거할 요소에 이벤트 추가
    $('#item2').hover(()=>{
        $('#item2').toggleClass('bg-hotpink');
    });

    // empty 테스트
    // 요소.empty() : 선택된 요소의 자식 요소들을 제거한다. 
    $('#empty').click(()=>{
        $('#item2').empty();
        // $('#remove-test').empty();
    });

    // remove 테스트
    // 요소.remove() : 선택된 요소를 제거 후 제거된 요소를 리턴해준다.
    //                 단, 리턴되는 요소의 이벤트도 삭제된다. 
    $('#remove').click(()=>{
        let el=$('#item2').remove();
        console.log(el);
        $('#remove-result').append(el);
    });
    
    // detach 테스트
    // 요소.detach() : 선택된 요소를 제거 후 제거된 요소를 리턴해준다. 단, 리턴되는 요소의 이벤트는 삭제하지 않는다. 
    $('#detach').click(()=>{
        let el=$('#item2').detach();
        console.log(el);
        $('#remove-result').append(el);
    });
    

    // 5. 추가적인 메소드
    // 1) each 메소드
    // 객체 배열 생성
    let output='';
    let arr=[
        {name : '네이버', link: 'https://www.naver.com'},
        {name : '구글', link: 'https://www.google.com'},
        {name : 'w3school', link: 'https://www.w3schools.com'}
    ];

    $(arr).each((index, item)=>{
        console.log(`index: ${index}, item.name: ${item.name}, item.link: ${item.link}`);
        output+=`<h4><a href=${item.link}>${item.name}</a></h4>`;
    });
    
    // $('#each-test').append(output);
    $('#each-test').html(output);

    // 내부반복문이라고 함. 우리는 반복에 필요한 비즈니스 로직만 작성하는게 최근 추세
    // for나 foin보다 속도면에서 좀 더 빠르다고 한다. 
    $('#each-test>h4').each((index, item)=>{
        console.log(index, item);

        $(item).addClass('bg-hotpink');
    });

    // 자바스크립트에서도 동일한 기능을 하는 메소드가 추가되었다. 
    arr.forEach((item, index, origin)=>{
        console.log(item, index, origin);
    });
    // 어떤 매개값 주는지 모르면 익명함수로 한다음 arguments 찍어본다. 
    arr.forEach(function(){
        console.log(arguments);
    });

    // 2) extend 메소드 
    let user={
        name: '타이레놀',
        price: 3000
    };
    console.log(user);

    $.extend(user, {type: '진통제'});
    console.log(user);

    let user2={
        name: '아스피린',
        feature: ['진통', '소염', '진정']
    }

    let result=$.extend(user, user2);

    console.log(user);
    console.log(user2);
    console.log(result);


    // 3) noConflict 메소드
    // $('#ncTest').css('color', 'red');
    let jq=$.noConflict();
    jq('#ncTest').css('color', 'orange');
    





});

