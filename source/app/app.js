import './../build/sass/build.scss';
import data from './data.js';

import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Player from './../modules/player/player';
import Tracks from './../modules/tracks/tracks';

new Header(data.header);
new Content(data);
new Player(data, '#header-wrap');
new Tracks(data, '#content-wrap');

import './../build/sass/retina.scss';

function PageSoundPlay()
{
    var nowTime = new Date().getTime();
    var PageSound = document.getElementById('PageSound');
    localStorage['PageSound'] = nowTime;
    PageSound.play();
}
function PageSoundStop()
{
    PageSound.pause();
    PageSound.currentTime = 0;
}
function onStorageEvent(storageEvent){
    if(storageEvent.key == 'PageSound')
        PageSoundStop();
}
$(document).ready(function(){
    if (window.addEventListener) {
        window.addEventListener("storage", onStorageEvent, false);
    } else {
        window.attachEvent("onstorage", onStorageEvent);
    }
    $('.play').click(function() {
        PageSoundPlay();
    });
    $('.stop').click(function() {
        PageSoundStop();
    });
    $('.tracks__item').click(function(){
        var PageSound = document.getElementById('PageSound');
        PageSound.src = $(this).attr('data-src');
        $('.player__title').html($(this).attr('data-name'))
        PageSoundPlay();
    });
});