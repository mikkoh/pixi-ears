var REG_X_Y = /([\d\.]+) *([\d\.]+)/;

module.exports = function( value ) {

	var rVal = value,
		data;

	if( typeof value == 'string' ) {

		data = REG_X_Y.exec( value );

		rVal = {

			x: parseFloat( data[ 1 ] ),
			y: parseFloat( data[ 2 ] )
		};
	}

	if( rVal.x === undefined )
		throw new Error( 'x is not defined' );
	else if( rVal.y === undefined )
		throw new Error( 'y is not defined' );

	return rVal;
};