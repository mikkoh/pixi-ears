var pixi = require( 'pixi' ),
	applyTrans = require( './applyTransforms' );

module.exports = function( node ) {

	var rVal = new pixi.Sprite( pixi.Texture.fromImage( node.texture ) );

	applyTrans( node, rVal );

	return rVal;
};