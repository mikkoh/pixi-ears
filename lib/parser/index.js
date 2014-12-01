module.exports = parser;

var parseVariable = require( './parseVariable' ),
	getVarIteration = require( './getVarIteration' );

var REG_VAR_VAL = /([\w$]+) (.+)/;

function parser( template, jsonData ) {

	var lines = template.split( '\n' ),
		lineNumbers = [];

	// if no json data was passed then just use an empty object
	jsonData = jsonData || {};

	removeEmptyLines( lines, lineNumbers );

	return getBlocks( lines, lineNumbers, jsonData );
}

function removeEmptyLines( lines, lineNumbers ) {

	var linesOld = lines.concat();
	lines.length = 0;

	for( var i = 0, len = linesOld.length; i < len; i++ ) {

		if( linesOld[ i ] !== '' ) {

			lines.push( linesOld[ i ] );
			lineNumbers.push( i + 1 );
		}
	}
}

function getBlocks( lines, lineNumbers, jsonData ) {

	var tabs = [],
		rVal = {},
		cLine, cTab;

	// count tab amounts
	for( var i = 0, len = lines.length; i < len; i++ ) {

		cTab = 0;
		cLine = lines[ i ];

		while( cLine.charAt( cTab ) == '\t' )
			cTab++;	

		tabs[ i ] = cTab;
		lines[ i ] = lines[ i ].substr( cTab );
	}

	parseObject( rVal, 0, 0, tabs, lines, lineNumbers, jsonData );

	return rVal;
}


function parseObject( into, sIdx, tabAmount, tabs, lines, lineNumbers, jsonData ) {

	var varTabAmount = tabAmount + 1, 
		objectName = lines[ sIdx ],
		varVal, cObj, cVar, cVal, objIteration, cJSON;

	varVal = REG_VAR_VAL.exec( lines[ sIdx ] );

	if( varVal ) {

		error( sIdx, lineNumbers, 'Expected object but received variable' );
	}

	// since we can have object names such as 'something{{0..2}}' we need to parse
	// out of we need to itera
	objIteration = getVarIteration( objectName );

	objIteration.forEach( function( objectName, idx ) {

		cObj = into[ objectName ] = {};

		cJSON = Object.create( jsonData );
		cJSON.$i = idx;

		for( var j = sIdx + 1, len = tabs.length; j < len; j++ ) {

			if( tabs[ j ] == varTabAmount ) {

				varVal = REG_VAR_VAL.exec( lines[ j ] );

				// new object
				if( !varVal ) {

					parseObject( cObj, j, varTabAmount, tabs, lines, lineNumbers, cJSON );
				// new variable
				} else {

					try {

						parseVariable( cObj, varVal[ 1 ], varVal[ 2 ], cJSON );
					} catch( e ) {

						error( j, lineNumbers, e.message );
					}
				}
			// if the tab amount becomes smaller then we've parsed out this object
			} else if( tabs[ j ] <= tabAmount ) {

				break;
			}
		}
	});
}

function error( idx, lineNumbers, message ) {

	throw new Error( 'Line ' + lineNumbers[ idx ] + ': ' + message );
}