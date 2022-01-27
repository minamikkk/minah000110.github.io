
$( function () {


  $( '.sub' ).hide();

  $( '#gnb > li' ).hover( function () {
    $( this ).find( '.sub' ).slideDown( 400 );
  }, function () {
    $( this ).find( '.sub' ).slideUp( 400 );
  });
});