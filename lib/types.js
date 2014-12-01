var DOC = 'displayobjectcontainer',
	MOVIE_CLIP = 'movieclip',
	SPRITE = 'sprite',
	TEXT = 'text';


module.exports = {

	DOC: DOC,
	MOVIE_CLIP: MOVIE_CLIP,
	SPRITE: SPRITE,
	TEXT: TEXT,

	getType: function( node ) {

		return this.getFromType( node ) || this.inferType( node );
	},

	getFromType: function( node ) {

		var type = node.type.toLowerCase();

		if( type == DOC || 
			type == MOVIE_CLIP ||
			type == SPRITE || 
			type == TEXT ) 

			return type;
	},

	inferType: function( node ) {

		if( node.texture ) {

			return SPRITE;
		} else if( Array.isArray( node.textures ) ) {

			return MOVIE_CLIP;
		} else if( typeof node.text == 'string' ) {

			return TEXT;
		}
	}
};