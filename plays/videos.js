const dp = new DPlayer({
    container: document.getElementById('dplayer'),
	loop: true,
	volume: 0.5,
    video: {
        url: 'http://link.hhtjim.com/yyt/2464560.mp4',
        type: 'hls'
    }
});

/*
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    theme: '#FADFA3', // 主题色
    loop: true, // 循环播放
    screenshot: true, // 截图 若开启视频和封面需要开启跨域
	volume: 0.7, // 默认音量
    mutex: false, // 互斥 阻止多播放器同时播放
    video: {
        url: 'http://link.hhtjim.com/yyt/2464560.mp4',
    },
    subtitle: {
    },
    danmaku: {
    }
});

*/

/*
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'http://link.hhtjim.com/yyt/2464560.mp4',
        type: 'hls'
    }
});
*/
/*
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'http://link.hhtjim.com/yyt/2464560.mp4',
        type: 'pearplayer',
        customType: {
            'pearplayer': function (video, player) {
                new PearPlayer(video, {
                    src: video.src,
                    autoplay: player.options.autoplay
                });
            }
        }
    }
});
*/

