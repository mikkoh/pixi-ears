module.exports = function( node, item ) {

	for( var i in node ) {

		switch( i ) {

			case 'anchor':
			case 'scale':
			case 'position':

				setPointValue( i, node, item );
			break;

			case 'rotation':
			case 'alpha':
			case 'visible':

				setValue( i, node, item );
			break;
		}
	}
};

function setValue( variable, node, item ) {

	item[ variable ] = node[ variable ];
}

function setPointValue( variable, node, item ) {

	item[ variable ].x = node[ variable ].x;
	item[ variable ].y = node[ variable ].y;
}