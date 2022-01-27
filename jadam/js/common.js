$('document').ready(function(){
  dropdown(); // 드롭다운
  subSlide(); // 서브 슬라이드 이미지
  tab(); //탭
});

function dropdown(){
  // 드롭다운
  $( '.sub' ).hide();
  $( '#gnb > li' ).hover( function () {
    $( this ).find( '.sub' ).slideDown( 400 );
  }, function () {
    $( this ).find( '.sub' ).slideUp( 400 );
  });
}

function subSlide(){
  // 서브 슬라이드 이미지
  $( '.new_menu' ).bxSlider( {
    slideWidth: 700,
    pager: false,
    reponsive: true
  });
}

function tab(){
  //탭
  // $('.ck').hide();
  // $('.ck:first').show();
  
  $( '.tab_menu > li' ).click( function () {
    var i = $(this).index(); 
    $( '.tab_menu > li' ).not(this).removeClass('on');
    $(this).addClass('on');
  
    $( '.tab_content > ul' ).removeClass('on');
    $( '.ck' ).eq(i).addClass('on'); 
  });
}