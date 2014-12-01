var REGEX_VAR_ITER = /([\w$]+){{ *(\d+) *.. *(\d+) *}}/;

module.exports = function( variable ) {

	var data = REGEX_VAR_ITER.exec( variable ),
		rVal, varBase, sIdx, eIdx;

	if( data ) {

		rVal = [];

		varBase = data[ 1 ];
		sIdx = parseInt( data[ 2 ] );
		eIdx = parseInt( data[ 3 ] );

		for( var i = sIdx; i <= eIdx; i++ ) {

			rVal.push(  varBase + i );
		}
	} else {

		rVal = [ variable ];
	}

	return rVal;
};