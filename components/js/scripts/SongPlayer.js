var playSong = document.getElementById( 'play-song' );
var pauseSong = document.getElementById( 'pause-song' );
var barsContainer = document.querySelector( '.player-bars' );

var audio = new Audio( './components/assets/audio/plot-song.mpeg' );

for ( var i = 0; i < 100; i++ ) {
	var bar = document.createElement( 'div' );
	bar.classList.add( 'bar' );
	barsContainer.appendChild( bar );
}

var bars = document.querySelectorAll( '.bar' );

bars.forEach( function ( bar, index ) {
	bar.style.animation = `ocilation 1s infinite alternate ${ index * ( Math.random() * 0.05 ) }s`;
	bar.style.animationPlayState = 'paused';
} );


playSong.addEventListener( 'click', function () {
	audio.play();
	playSong.style.display = 'none';
	pauseSong.style.display = 'block';
	bars.forEach( function ( bar, index ) {
		bar.style.animationPlayState = 'running';
	} );
} );

pauseSong.addEventListener( 'click', function () {
	audio.pause();
	playSong.style.display = 'block';
	pauseSong.style.display = 'none';
	bars.forEach( function ( bar ) {
		bar.style.animationPlayState = 'paused';
	} );
} );