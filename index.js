module.exports = pixiEars;

var parser = require( './lib/parser' ),
	get = require( './lib/get' );

function pixiEars( template, data ) {

	var toMake = parser( template, data );

	return create( toMake );
}

function create( toMake, into, parent ) {

	var into = into || {},
		pixiThing;

	for( var i in toMake ) {

		if( typeof toMake[ i ] == 'object' ) {
			
			var pixiThing = get( toMake[ i ] );

			if( parent )
				parent.addChild( pixiThing );

			into[ i ] = function( pixiThing ) {

				return pixiThing;
			}.bind( undefined, pixiThing );

			create( toMake[ i ], into[ i ], pixiThing );
		}
	}

	return into;
}