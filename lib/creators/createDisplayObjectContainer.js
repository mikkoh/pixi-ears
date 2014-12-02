var pixi = require( 'pixi' ),
	applyTrans = require( './applyTransforms' );

module.exports = function( node ) {

	var rVal = new pixi.DisplayObjectContainer();

	applyTrans( node, rVal );

	return rVal;
};