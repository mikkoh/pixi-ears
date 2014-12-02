var fs = require( 'fs' );

var test = require( 'prova' ),
	pixiEars = require( './..' ),
	data = require( './data/testData' );

var template = fs.readFileSync( __dirname + '/data/testTemplate.ear', 'utf8' );

var pixi = pixiEars( template, data );

test( 'Has all items', function( t ) {

	t.plan( 8 );

	t.ok( pixi.container(), 'Has container' );
	t.ok( pixi.container.mySprite(), 'Has mySprite' );
	t.ok( pixi.container.myMovieClip(), 'Has myMovieClip' );
	t.ok( pixi.container.mySecondMovieClip(), 'Has mySecondMovieClip' );
	t.ok( pixi.container.myText(), 'Has myText' );
	t.ok( pixi.container.item0(), 'Has item0' );
	t.ok( pixi.container.item1(), 'Has item1' );
	t.ok( pixi.container.item2(), 'Has item2' );
});

test( 'Check regular values', function( t ) {

	t.plan( 3 );

	t.equal( pixi.container.myMovieClip().visible, false, 'myMovieClip visible is correct' );
	t.equal( pixi.container.item1().alpha, 0.5, 'item1 alpha is correct' );
	t.equal( pixi.container.item1().rotation, 1 / 2 * Math.PI, 'item1 rotation is correct' );
});

test( 'Check point values', function( t ) {

	t.plan( 8 );

	t.equal( pixi.container.mySprite().position.x, 100, 'mySprite x is correct' );
	t.equal( pixi.container.mySprite().position.y, -20, 'mySprite y is correct' );
	t.equal( pixi.container.item1().position.x, 0, 'item1 x is correct' );
	t.equal( pixi.container.item1().position.y, 100, 'item1 y is correct' );
	t.equal( pixi.container.item1().anchor.x, 0.25, 'item1 x is correct' );
	t.equal( pixi.container.item1().anchor.y, 0.25, 'item1 y is correct' );
	t.equal( pixi.container.item1().scale.x, 0.5, 'item1 x is correct' );
	t.equal( pixi.container.item1().scale.y, 0.5, 'item1 y is correct' );
});

test( 'Check children amounts', function( t ) {

	t.plan( 8 );

	t.equal( pixi.container().children.length, 7, 'Container has 7 children' );
	t.equal( pixi.container.mySprite().children.length, 0, 'mySprite has 0 children' );
	t.equal( pixi.container.myMovieClip().children.length, 0, 'myMovieClip has 0 children' );
	t.equal( pixi.container.mySecondMovieClip().children.length, 0, 'mySecondMovieClip has 0 children' );
	t.equal( pixi.container.myText().children.length, 0, 'myText has 0 children' );
	t.equal( pixi.container.item0().children.length, 0, 'item0 has 0 children' );
	t.equal( pixi.container.item1().children.length, 0, 'item1 has 0 children' );
	t.equal( pixi.container.item2().children.length, 0, 'item children2 has 0 children' );
});