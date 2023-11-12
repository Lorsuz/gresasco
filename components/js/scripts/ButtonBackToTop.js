$( document ).ready( function () {
	$( "#back-to-top" ).css( "display", "none" );
	$( window ).scroll( function () {
		if ( $( this ).scrollTop() === 0 ) {
			$( "#back-to-top" ).css( "display", "none" );
		} else {
			$( "#back-to-top" ).css( "display", "flex" );
		}
	} );

	$( "#back-to-top" ).click( function () {
		$( "html, body" ).animate( { scrollTop: 0 }, 800 );
	} );
} );