const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
	theme: '#FADFA3',
    loop: 'all',
    volume: 0.5,
	mutex: false,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Better Together',
            artist: 'Anthem Lights',
            url: 'http://up.mixrnb.com/201711/lz52ZwOdNSmXnz991Dz9.mp3',
            cover: 'https://source.unsplash.com/random/800x800'
        },
		{
			name: 'Rich & Famous ',
            artist: 'SJUR / Isac Elliot',
            url: 'http://up.mixrnb.com/201805/GLG7aZgXAD7uaA6zsSDX.mp3',
            cover: 'https://source.unsplash.com/random/600x600'
		},
		{
			name: 'Raincheck',
            artist: 'Hannah Jane Lewis',
            url: 'http://up.mixrnb.com/201805/GLG7aZgXAD7uaA6zsSDX.mp3',
            cover: 'https://source.unsplash.com/random/600x600'
		}
			
    ]
});
