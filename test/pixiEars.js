var fs = require( 'fs' );

var test = require( 'prova' ),
	pixiEars = require( './..' ),
	data = require( './data/testData' );

var template = fs.readFileSync( __dirname + '/data/testTemplate.ear', 'utf8' );

var pixi = pixiEars( template, data );

console.log( 'container', pixi.container() );
console.log( 'mySprite', pixi.container.mySprite() );
console.log( 'item1', pixi.container.item1() );
console.log( 'myMovieClip', pixi.container.myMovieClip() );
console.log( 'myText', pixi.container.myText() );