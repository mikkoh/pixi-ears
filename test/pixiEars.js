var fs = require( 'fs' );

var pixiEars = require( './..' ),
	data = require( './data/testData' );

var template = fs.readFileSync( __dirname + '/data/testTemplate.ear', 'utf8' );

var pixi = pixiEars( template, data );

console.log( pixi.container() );
console.log( pixi.container.item0() );
console.log( pixi.container.myMovieClip() );
console.log( pixi.container.myText() );