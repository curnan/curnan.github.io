const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'http://up.mixrnb.com/201711/lz52ZwOdNSmXnz991Dz9.mp3',
            cover: 'https://source.unsplash.com/random/800x800'
        }
    ]
});