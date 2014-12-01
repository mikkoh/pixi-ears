module.exports = {

	container: {

		mySprite: {

			texture: 'someImage.png',
			position: { x: 100, y: -20 }
		},

		myMovieClip: {

			textures: [ 'someImage1.png', 'someImage2.png', 'someImage3.png', 'someImage4.png' ]
		},

		myText: {

			text: 'something',
			style: {

				font: 'bold 20px Arial',
				fill: '#00CAFE'
			}
		},

		item0: {

			position: { x: 0, y: 0 },
			texture: 'someImage.png'
		},

		item1: {

			position: { x: 0, y: 40 },
			texture: 'someImage.png'
		},

		item2: {

			position: { x: 0, y: 80 },
			texture: 'someImage.png'
		}
	}
};