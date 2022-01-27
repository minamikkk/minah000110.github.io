//탭
$(function(){

  // $('.ck').hide();
  // $('.ck:first').show();

  $( '.tab_menu > li' ).click( function () {
    var i = $(this).index(); 
    $( '.tab_menu > li' ).not(this).removeClass('on');
    $(this).addClass('on');

    $( '.tab_content > ul' ).removeClass('on');
    $( '.ck' ).eq(i).addClass('on'); 
  })
})
   