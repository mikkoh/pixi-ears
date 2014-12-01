var fs = require( 'fs' );

var test = require( 'tape' ),
	parser = require( '../lib/parser' ),
	data = require( './data/testData' );


var template = fs.readFileSync( __dirname + '/data/testTemplate.ear', 'utf8' );

var parsedData;

test( 'Test parsing data', function( t ) {

	t.plan( 2 );

	try {

		var starTime = Date.now();
		parsedData = parser( template, data );

		t.ok( parsedData, 'Did return data' );
		t.ok( Date.now() - starTime < 17, 'Run at 60fps' );
	} catch( e ) {

		t.error( e, 'There was an error while parsing: ' + e.message );
	}
});

test( 'Parsed depths', function( t ) {

	t.plan( 3 );

	t.ok( parsedData.container, 'Has container' );
	t.ok( parsedData.container.myText, 'Has myText' );
	t.ok( parsedData.container.myText.style, 'Has style' );
});

test( 'Has iterated variables', function( t ) {

	t.plan( 3 );

	t.ok( parsedData.container.item0, 'Has item0' );
	t.ok( parsedData.container.item1, 'Has item1' );
	t.ok( parsedData.container.item2, 'Has item2' );
});

test( 'MovieClips were parsed properly', function( t ) {

	var textures;

	t.plan( 5 );

	t.ok( parsedData.container.myMovieClip, 'Has myMovieClip' );
	t.ok( Array.isArray( parsedData.container.myMovieClip.textures ), 'Textures is array' );


	t.ok( parsedData.container.mySecondMovieClip, 'Has mySecondMovieClip' );

	textures = parsedData.container.mySecondMovieClip.textures;
	t.ok( Array.isArray( textures ), 'Textures is array' );
	t.ok( textures[ 0 ] == 'someImage1.png' && textures[ 1 ] == 'someImage2.png', 'Generated names were correct: ' + textures );
});

test( 'Positions were parsed properly', function( t ) {

	t.plan( 6 );

	t.ok( parsedData.container.mySprite, 'Has mySprite' );
	t.ok( parsedData.container.mySprite.position, 'Has postion' );
	t.equal( parsedData.container.mySprite.position.x, 100 , 'Static x is correct' );
	t.equal( parsedData.container.mySprite.position.y, -20 , 'Static y is correct' );

	t.equal( parsedData.container.item1.position.x, 0 , 'Dynamic x is correct' );
	t.equal( parsedData.container.item1.position.y, 40 , 'Dynamic y is correct' );	
});


