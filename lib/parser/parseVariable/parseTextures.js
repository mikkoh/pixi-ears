module.exports = function( value ) {

	var rVal = value;

	if( typeof rVal == 'string' ) {

		rVal = rVal.split( ' ' );
	}

	return rVal;
};