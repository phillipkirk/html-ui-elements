PLAYER = document.getElementById('audio_player');

function build_player() {
    PLAYER.classList = 'player-blue'
    DATA = PLAYER.innerHTML;
    DATA = DATA.split('|');
    SRC = DATA[0];
    TYPE = DATA[1];
    PLAYER.innerText = null;
    title = DATA[0].split('//')[1].split('/');;
    document.title = '';
    for (let i = 1; i < title.length; i++) {
        document.title += '/' + title[i];
    };
    heading = document.createElement('h3');
    heading.innerText = 'Stream: ' + document.title;
    PLAYER.append(heading);
    const ado = document.createElement("audio");
    ado.id = "audio1";
    const adosrc = document.createElement("source");
    adosrc.src = SRC;
    adosrc.type = TYPE;
    ado.appendChild(adosrc);
    PLAYER.appendChild(ado);
}

function attatch_controls() {
    controls = document.createElement('div');
    controls.classList.add("controls");
    PLAYER.appendChild(controls);
    play_pause_button = document.createElement('button');
    play_pause_button.id = "play_pause_button";
    play_pause_button.setAttribute('onclick', 'playPause()');
    play_pause_button.innerHTML = "&#x25B6;";
    controls.append(play_pause_button); 

    stop_button = document.createElement('button');
    stop_button.classList.add("stop_button_stopped")
    stop_button.id = "stop_button";
    stop_button.setAttribute('onclick','stop()');
    stop_button.innerHTML = '&#x23F9';
    controls.append(stop_button); 

    mute_button = document.createElement('button');
    mute_button.innerHTML = '&#128263;';
    mute_button.id = "mute_button";
    mute_button.setAttribute('onclick', 'mute()');
    controls.append(mute_button);
    
    volume_slider = document.createElement('input');
    volume_slider.type = 'range';
    volume_slider.id = "volume_slider";
    volume_slider.value = 75;
    controls.append(volume_slider);
}

build_player();
attatch_controls();    

/* functionality */
var MyAudio = document.getElementById("audio1");
var play_pause_butt = document.getElementById('play_pause_button');
var stop_button = document.getElementById('stop_button');
var mute_button = document.getElementById('mute_button')
var volume_slider = document.getElementById('volume_slider');
var progress_bar = document.getElementById('progress_bar')
var progress_range = document.getElementById('progress_bar_range')

function play() {
    MyAudio.play();
    play_pause_button.innerHTML = "<b>&#x23F8;</b>";
    stop_button.classList = '';
} 

function pause() {
    MyAudio.pause();
    play_pause_button.innerHTML = "&#x25B6;";
    stop_button.classList = '';
} 

function playPause() {
    if (MyAudio.paused) {
        play();
    } else {
        pause();
    }
}

function stop() {
    MyAudio.currentTime = 0;
    pause();
    stop_button.classList = 'stop_button_stopped';
}

function mute() {
    MyAudio.muted = !MyAudio.muted;
}

function mute_check() {
    if (MyAudio.muted) {
        mute_button.innerHTML = '&#128263;';
    } else {
        mute_button.innerHTML = '&#128266;';
    }
}
setInterval(mute_check, 1000)

function volume_slider_func() {
    MyAudio.volume = volume_slider.value / 100
    volume_level = MyAudio.volume * 100     
}
setInterval(volume_slider_func, 1000)

function reset_play_button() {
    if (MyAudio.ended == true) {
        play_pause_button.innerHTML = "&#x25B6;";
    }
}

setInterval(reset_play_button, 1000)

// Hotekeys

document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        playPause()
    }
    if (event.key === 's') {
        stop();
    }
    if (event.key === 'm') {
        mute();
    }
    if (event.key === "+") {
        volume_slider.value += 5;
    }
    if (event.key === '-') {
        volume_slider.value -= 5;
    }
    if (event.key === '1') {
        PLAYER.classList = 'player-blue';
    }
    if (event.key === '2') {
        PLAYER.classList = 'player-green';
    }
    if (event.key === '3') {
        PLAYER.classList = 'player-red';
    }
    if (event.key === '4') {
        PLAYER.classList = 'player-yellow';
    }
    if (event.key === '9') {
        PLAYER.classList = 'player-colorChange';
    }
})