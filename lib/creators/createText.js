var pixi = require( 'pixi' ),
	applyTrans = require( './applyTransforms' );

module.exports = function( node ) {

	var rVal = new pixi.Text( node.text, node.style );

	applyTrans( node, rVal );

	return rVal;
};