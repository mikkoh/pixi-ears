var types = require( '../../types' );

var TYPE = 'type',
	POSITION = 'position',
	ROTATION = 'rotation',
	SCALE = 'scale',
	ALPHA = 'alpha',
	VISIBLE = 'visible',
	ANCHOR = 'anchor',
	BUTTON_MODE = 'buttonMode',
	doc = [

		TYPE,
		POSITION,
		ROTATION,
		SCALE,
		ALPHA,
		VISIBLE,
		ANCHOR,
		BUTTON_MODE
	],
	sprite = [

		'texture'
	],
	movieclip = [

		'textures'
	],
	text = [

		'style'
	],
	all;

sprite = sprite.concat( doc );
movieclip = movieclip.concat( doc );
text = text.concat( doc );

all = doc.concat( sprite, movieclip, text );

module.exports = function( key, type ) {

	var variables;

	switch( type ) {

		case types.DOC:

			variables = doc;
		break;

		case types.MOVIE_CLIP:


			variables = movieclip;
		break;

		case types.SPRITE:

			variables = sprite;
		break;

		case types.TEXT:

			variables = text;
		break;

		case undefined:

			variables = all;
		break;

		default:
			throw new Error( 'unknown type ' + type );
	}

	return variables.indexOf( key ) != -1;
};