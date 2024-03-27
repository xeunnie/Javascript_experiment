var count = 0;

$('.badge').on('click', function(){
  count += 1;
  if (count % 2 == 1) {
    $('.badge').html('Light');
  } else {
    $('.badge').html('Dark')
  }
});

var name = 'choi';
//변수의 선언, 할당, 범위
// let은 재선언 불가, 범위{}
// const 재선언, 재할당 불가, 변하면 안되는 값 보관하기 좋음, 범위{}
// var 재선언, 재할당 가능, 범위 function 내부


// 변수에 +1 하는 방법 => 변수++, 변수+=1, 변수=변수+1
//잠깐 자료를 저장하는 변수 문법 => 길고 복잡한 자료들 저장 가능, 특정 값 기억하게 만들고 싶을 때 씀