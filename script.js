//
document.querySelector('.bonjour').innerHTML = 'merci';
//$('.bonjour').html('merci');
$('.bonjour').css('color', 'hotpink')
$('.myname').addClass('addedclass')
//
$('#test-btn').on('click',function(){
    $('.bonjour').hide()
    //display:none이랑 동일 .hide()말고 .fadeOut() .slideUp()사용 가능 // css로도 처리 가능
})
//제이쿼리쓸 때 $('셀렉터')로 찾으면 제이쿼리 함수만 붙일 수 있음, queryselector('셀렉터')로 찾으면 js함수만 붙일 수 있음


//로그인 버튼, 모달창 띄우기 -> css클래스 네임 추가 방식
// document.getElementById('login').addEventListener('click',function(){
    // document.querySelector('.black-bg').classList.add('show-modal');
// }) => js방식
$('#check').on('click',function(){
    $('.black-bg').addClass('show-modal');
    // $('.black-bg').fadeIn()
});

//전송버튼 눌렀을 떄, 저기 인풋에 입력한 값이 공백이면 알림창 띄우기
$('form').on('submit', function(e){
    if(document.getElementById('user-id').value === ''){
        alert('input id');
        e.preventDefault();
    }
    if(document.getElementById('user-pw').value === '' && length< 6 ){
        alert('input pw');
        e.preventDefault();
    }
    if(document.getElementById('user-pw').value.length < 6 ){
        alert('input pw');
        e.preventDefault();
    }
})

//input이나 change 넣으면 유저가 넣는 값에 따라 내용이 바뀜
// document.getElementById('email').addEventListener('input', function(){

// })

//369 game
$('#send').on('click',function threesgame(num){
    if(document.getElementById('number').value % 10 == 3){
        document.write('clap')
    } else if ( document.getElementById('number').value % 10 == 6){
        document.write('clap * 2')
    } else if ( document.getElementById('number').value % 10 == 9){
        document.write('clap * 3')
    } else {
        document.write('pass')
    }
})