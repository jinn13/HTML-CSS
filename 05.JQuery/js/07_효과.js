$(document).ready(()=>{
    // 효과
    // 1. show()와 hide()
    $('#show').on('click', ()=>{
        $('#imgFlower').show(1500, 'linear');
    });
    $('#hide').on('click', ()=>{
        $('#imgFlower').hide(1500, 'swing');
        // 시간값을 설정해주면 애니메이션처럼 사라짐(설정없으면 그냥 바로 사라짐)
        // swing : 빨라지다가 끝에서 느려짐
        // linear : 일정하게 느림
        // 기본적으론 저 2개가 있고, 더 쓰고 싶다면 제이쿼리 ui다운받아야 함?
    });

    $('#toggle').on('click', ()=>{
        // 토글 없이 효과를 구현하는 방법
        if($('#imgFlower').css('display')==='none'){
            $('#imgFlower').show(500, 'linear');
        }else{
            $('#imgFlower').hide(500, 'linear');
        }
    });




    // 2. slideDown()와 slideUp()
    $('.menu').on('click', (event)=>{
        // let content=$(event.target).next();

        // if(content.css('display') === 'none'){
        //     content.slideDown(500, 'swing');
        // }else{
        //     content.slideUp(500, 'swing');
        // }

        // slideToggle()를 사용하여 SlideDown, slideUp을 실행
        // $(event.target).next().slideToggle(500, 'swing');

        // 다른메뉴를 누르면 다른 카테고리의 열린 메뉴를 닫고 싶다.
        // // 하나의 컨텐츠만 slideDown되도록 수정 
        $('.contents').slideUp(500, 'swing');
        $(event.target).next().slideDown(500, 'swing');
    });

        // 3. fadIn()와 fadeOut()
        $('#fadeIn').on('click', ()=>{
            $('#imgForest').fadeIn(1000, 'linear');
            // $('#imgForest').fadeIn('slow');
        });

        $('#fadeOut').on('click', ()=>{
            $('#imgForest').fadeOut(1000, 'swing');
            // $('#imgForest').fadeOut('fast');
        });

        $('#fadeToggle').on('click', ()=>{
            $('#imgForest').fadeToggle(1000, 'swing');
        });

        // z인덱스 써서 글자를 위로 띄우게 하거나 할수있지만 이건 나중에 찾아보기
        $('#imgForest').hover(
            (event)=>{
                if(event.type === 'mouseenter'){
                    $(event.target).fadeTo(500, 0.5);
                }else if(event.type === 'mouseleave'){
                    $(event.target).fadeTo(500, 1);
                }
            }
        );








});
