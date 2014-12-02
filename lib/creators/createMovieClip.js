var pixi = require( 'pixi' ),
	applyTrans = require( './applyTransforms' );

module.exports = function( node ) {

	var textures = [], rVal;

	for( var i = 0, len = node.textures.length; i < len; i++ ) {

		textures.push( pixi.Texture.fromImage( node.textures[ i ] ) );
	}

	rVal = new pixi.MovieClip( textures );

	applyTrans( node, rVal );

	return rVal;
};