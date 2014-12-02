var pixi = require( 'pixi' );

module.exports = function( node ) {

	var rVal = new pixi.Sprite( pixi.Texture.fromImage( node.texture ) );

	return rVal;
};