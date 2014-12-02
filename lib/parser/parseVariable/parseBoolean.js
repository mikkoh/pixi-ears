module.exports = function( value ) {

	if( typeof value == 'string' )
		return value.toLowerCase() == 'true';
	else
		return Boolean( value );
};