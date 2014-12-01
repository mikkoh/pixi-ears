var t = require( './types' );

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
		ANCHOR
	],
	movieclip = [

		'textures'
	],
	sprite = [

		'texture'
	],
	text = [

		'text',
		'style'
	];

movieclip = doc.concat( movieclip );
sprite = doc.concat( sprite );
text = doc.concat( text );

module.exports = function( type, key ) {

	switch( type ) {

		case t.DOC:
			return doc.indexOf( key ) != -1;

		case t.MOVIE_CLIP:
			return movieclip.indexOf( key ) != -1;			

		case t.SPRITE:
			return sprite.indexOf( key ) != -1;

		case t.TEXT:
			return text.indexOf( key ) != -1;

		default:
			return false;
	}
};