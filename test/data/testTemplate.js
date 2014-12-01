module.exports = {

	container: {

		mySprite: {

			texture: 'someImage.png',
			position: '100 -20'
		},

		myMovieClip: {

			textures: 'someImage1.png someImage2.png someImage3.png someImage4.png'
		},

		mySecondMovieClip: {

			textures: 'someImage{{1..4}}.png'
		},

		myText: {

			text: '{{somethingFromJSON}}',
			style: {

				font: 'bold 20px Arial',
				fill: '#00CAFE'
			}
		},

		"item{{0..2}}": {

			position: '0 {{$i*40}}',
			texture: 'someImage.png'
		}
	}
};