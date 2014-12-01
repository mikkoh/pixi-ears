var REG_HAS_DYNAMIC = /{{(.+)}}/;

module.exports = function( into, variable, value, jsonData ) {

	if( REG_HAS_DYNAMIC.test( value ) ) {

		into[ variable ] = value.replace( REG_HAS_DYNAMIC, function( matched, source ) {

			var rVal;

			try {
				
				with( jsonData ) {

					eval( 'rVal=' + source );
				}
			} catch( e ) {

				rVal = '';
			}

			return rVal;
		});
	} else {

		into[ variable ] = value;
	}
};