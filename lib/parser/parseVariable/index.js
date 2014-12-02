module.exports = parseVariable;

var REG_HAS_DYNAMIC = /{{(.+)}}/,
	REG_ARRAY_ITERATION = /{{ *(\d+) *\.\. *(\d+) *}}/;

var specialParsers = {

	textures: require( './parseTextures' ),
	position: require( './parsePoint' ),
	anchor: require( './parsePoint' ),
	scale: require( './parsePoint' ),
	alpha: require( './parseNumeric' ),
	rotation: require( './parseNumeric' ),
	x: require( './parseNumeric' ),
	y: require( './parseNumeric' ),
	visible: require( './parseBoolean' )
};

function parseVariable( into, variable, value, jsonData ) {

	var parser = specialParsers[ variable ];

	value = evaluateValue( variable, value, jsonData );

	if( parser )
		value = parser( value );

	into[ variable ] = value;
}

// This function will evaluate whether the value is an `Array` value or regular
// after this it may call `getValue` to execute contained JS inside {{}}
function evaluateValue( variable, value, jsonData ) {

	var rVal;

	if( REG_HAS_DYNAMIC.test( value ) ) {

		var len, startIdx, endIdx;

		value = value.replace( REG_ARRAY_ITERATION, function( matched, sIdx, eIdx ) {

			startIdx = parseInt( sIdx );
			endIdx = parseInt( eIdx );
			len = endIdx - startIdx + 1;

			return '{{$j}}';
		});

		if( !len ) {

			rVal = getValue( value, jsonData );
		} else {

			rVal = [];

			for( var i = 0; i < len; i++ ) {

				jsonData.$j = startIdx + i;

				rVal.push( getValue( value, jsonData ) );
			}
		}
	} else {

		rVal = value;
	}

	return rVal;
}

// This function will attempt to replace values inside of {{}} by evaluating the JS inside
function getValue( value, jsonData ) {

	// we want to evaluate the JS within the dynamic part
	// do this by replacing the dynamic part with the evaluated part
	return value.replace( REG_HAS_DYNAMIC, function( matched, source ) {

		var rVal;

		// try to evaluate the JS thats within {{}}
		// if it fails we'll set the value to an empty string otherwise
		try {

			// this will allow for the json data to be evaluated against
			with( jsonData ) {

				eval( 'rVal=' + source );
			}
		} catch( e ) {

			rVal = '';
		}

		return rVal;
	});
}