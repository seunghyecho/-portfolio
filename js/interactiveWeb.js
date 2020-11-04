(() => {
    // 5. 특정 이미지 활성화 되었을 떄 함수를 실행시킴
    var actions={
        birdFlies(key){ //true,false 구분 시 key 임의값 지정해서 조건문
            document.querySelector('[data-index="2"] .bird').style.transform = key ? `translateX(${window.innerWidth}px)` : `translateX(-100%)`
        },
        birdFlies2(key){ //true,false 구분 시 key 임의값 지정해서 조건문
            document.querySelector('[data-index="5"] .bird').style.transform = key ? `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)` : `translate(-100%)`
        }
    }

    var stepElems = document.querySelectorAll('.step');
    var graphicElems = document.querySelectorAll('.graphic-item');
    var currentItem = graphicElems[0]; //현재 활성화된 그래픽 아이템을 지정하고 있는변수 //0번 항상 활성화
    var ioIndex;
    var io = new IntersectionObserver((entries, observer) => {
        //요소의 가시성 관찰시키도록 등록-> 나타나거나 사라질 때 콜백함수가 실행
        console.log(entries[0].target.dataset);
        ioIndex = entries[0].target.dataset.index * 1; //*1 은 숫자로 변경하기 위함
    });

    for (var i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]); //관찰대상을 지정해줌, 배열/ target인 div.step이 우리가 써야할 것
        // 1. 쌍 맞추기
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    // 3. 함수 기능 각각 따로 빼놓음
    function activate(action) {
        currentItem.classList.add('visible');
        if(action){
            actions[action](true);
        }
    }
    function inactivate(action) {
        currentItem.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }

    //2. 스크롤 할 경우
    window.addEventListener('scroll', function () {
        var step; //편의상
        var boundingRect;

        //for (var i = 0; i < stepElems.length; i++) { 4. 루프가 너무 많이 도는 비효율 발생 -> intersectionObserver 개념 발생
        for (var i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            
            if(!step) continue; //ioIndex 가 -1일 경우, 다음 진행으로 넘어가도록 하기 위함

            boundingRect = step.getBoundingClientRect(); //위치를 알려줌

            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {
                inactivate();
                currentItem = graphicElems[step.dataset.index]; //이미지 노출되어야 할  범위 설정
                activate(currentItem.dataset.action);
            }
        }
    })

    activate(); //첫 그래픽 이미지 항상 활성화

})();