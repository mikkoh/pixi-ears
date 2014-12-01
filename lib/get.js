var t = require( './types' ),
	createDisplayObjectContainer = require( './createDisplayObjectContainer' ),
	createMovieClip = require( './createMovieClip' ),
	createSprite = require( './createSprite' ),
	createText = require( './createText' );

module.exports = function( node ) {

	switch( t.getType( node ) ) {

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
};

