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
    var url = elem.attr('data-src');
    var title = elem.attr('title');

    var cover = elem.attr('data-cover');
    // var artist = elem.attr('artist');
    $('.player__title').text(title);
    // $('.player .artist').text(artist);
    $('.player__cover').css('background-image','url('+ cover +')');

    song = new Audio(url);

    // timeupdate event listener
    song.addEventListener('timeupdate',function (){
        var curtime = parseInt(song.currentTime, 10);
        // tracker.slider('value', curtime);
    });

    $('.tracks li').removeClass('active');
    elem.addClass('active');
}

function playAudio() {
    song.addEventListener('ended', function () {
        var next = $('.tracks li.active').next();
        if (next.length == 0) {
            next = $('.tracks li:first-child');
        }
        initAudio(next);
        playAudio();
    }, false);
    song.play();


    // tracker.slider("option", "max", song.duration);
    $('.fa-play').addClass('hidden');
    $('.fa-pause').removeClass('hidden');
}
function stopAudio() {
    song.pause();

    $('.fa-play').removeClass('hidden');
    $('.fa-pause').addClass('hidden');
}

$(document).ready(function(){
    // if (window.addEventListener) {
    //     window.addEventListener("storage", onStorageEvent, false);
    // } else {
    //     window.attachEvent("onstorage", onStorageEvent);
    // }


    // initialization - first element in playlist
    initAudio($('.tracks li:first-child'));



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

    // play click
    $('.fa-play').click(function (e) {
        e.preventDefault();
        playAudio();
    });

    // pause click
    $('.fa-pause').click(function (e) {
        e.preventDefault();
        stopAudio();
    });

    // forward click
    $('.fa-forward').click(function (e) {
        e.preventDefault();

        stopAudio();

        var next = $('.tracks li.active').next();
        if (next.length == 0) {
            next = $('.tracks li:first-child');
        }
        initAudio(next);
        playAudio();
    });

    // rewind click
    $('.fa-backward').click(function (e) {
        e.preventDefault();

        stopAudio();

        var prev = $('.tracks li.active').prev();
        if (prev.length == 0) {
            prev = $('.tracks li:last-child');
        }
        initAudio(prev);
        playAudio();
    });

    $('.tracks__item').click(function () {
        stopAudio();
        initAudio($(this));
        playAudio();
    });


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