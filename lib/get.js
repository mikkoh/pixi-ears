var t = require( './types' ),
	isVariable = require( './parser/parseVariable/isVariable' ),
	createDisplayObjectContainer = require( './creators/createDisplayObjectContainer' ),
	createMovieClip = require( './creators/createMovieClip' ),
	createSprite = require( './creators/createSprite' ),
	createText = require( './creators/createText' );

module.exports = function( name, node ) {

	var type = t.getType( node );

	// if no type and is not a variable
	if( !type && !isVariable( name ) ) {

		type = t.DOC;
	}

	if( type && !isVariable( name, type ) ) {

		switch( type ) {

			case t.MOVIE_CLIP:
				return createMovieClip( node );

			case t.SPRITE:
				return createSprite( node );

			case t.TEXT:
				return createText( node );

			case t.DOC:
			default:
				return createDisplayObjectContainer( node );
		}
	} else {

		return null;
	}
};

