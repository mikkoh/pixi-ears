var pixi = require( 'pixi' );

module.exports = function( node ) {

	var rVal = new pixi.Text( node.text, node.style );

	return rVal;
};