const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
	theme: '#FADFA3',
    loop: 'all',
    volume: 0.5,
	mutex: true,
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


const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});