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

var song;
// var tracker = $('.tracker');
// var volume = $('.volume');

function initAudio(elem) {
    console.log(elem);
    var url = elem.attr('src');
    var title = elem.attr('title');

    // var cover = elem.attr('cover');
    // var artist = elem.attr('artist');
    console.log("url", url);
    console.log("title", title);
    $('.player__title').text(title);
    // $('.player .artist').text(artist);
    // $('.player .cover').css('background-image','url(data/' + cover+')');

    song = new Audio(url);

    // timeupdate event listener
    song.addEventListener('timeupdate',function (){
        var curtime = parseInt(song.currentTime, 10);
        // tracker.slider('value', curtime);
    });

    // $('.playlist li').removeClass('active');
    // elem.addClass('active');
}

$(document).ready(function(){
    // if (window.addEventListener) {
    //     window.addEventListener("storage", onStorageEvent, false);
    // } else {
    //     window.attachEvent("onstorage", onStorageEvent);
    // }


// initialization - first element in playlist
    initAudio($('.tracks li:first-child'));


    // function playAudio() {
    //     song.play();
    //
    //     tracker.slider("option", "max", song.duration);
    //
    //     $('.play').addClass('hidden');
    //     $('.pause').addClass('visible');
    // }
    // function stopAudio() {
    //     song.pause();
    //
    //     $('.play').removeClass('hidden');
    //     $('.pause').removeClass('visible');
    // }
    //
    //
    //
    //
    //
    // function PageSoundPlay(id)
    // {
    //     var nowTime = new Date().getTime();
    //     var PageSound = document.getElementById('PageSound');
    //     localStorage['PageSound'] = nowTime;
    //     PageSound.play();
    // }
    // function PageSoundStop()
    // {
    //     PageSound.pause();
    //     PageSound.currentTime = 0;
    // }
    // function onStorageEvent(storageEvent){
    //     if(storageEvent.key == 'PageSound')
    //         PageSoundStop();
    // }
    // // play click
    // $('.play').click(function (e) {
    //     e.preventDefault();
    //
    //     playAudio();
    // });
    //
    // // pause click
    // $('.pause').click(function (e) {
    //     e.preventDefault();
    //
    //     stopAudio();
    // });
    // $('.play').click(function() {
    //     PageSoundPlay();
    // });
    // $('.stop').click(function() {
    //     PageSoundStop();
    // });
    // $('.tracks__item').click(function(){
    //     PageSound.src = $(this).attr('data-src');
    //     $('.player__title').html($(this).attr('data-name'));
    //     PageSound.label = $(this).attr('data-name');
    //     PageSound.addEventListener('ended', function (){
    //         console.log($(this));
    //     });
    //     PageSoundPlay(id);
    // });
});