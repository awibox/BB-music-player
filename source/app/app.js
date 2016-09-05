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
import 'jquery-ui-bundle';

var song;
// var tracker = $('.tracker');


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
    var nowTime = new Date().getTime();
    localStorage['song'] = nowTime;
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
    song.currentTime = 0;

    $('.fa-play').removeClass('hidden');
    $('.fa-pause').addClass('hidden');
}
function onStorageEvent(storageEvent){
    if(storageEvent.key == 'song')
        stopAudio();
}

$(document).ready(function(){
    if (window.addEventListener) {
        window.addEventListener("storage", onStorageEvent, false);
    } else {
        window.attachEvent("onstorage", onStorageEvent);
    }


    // initialization - first element in playlist
    initAudio($('.tracks li:first-child'));

    song.volume = 0.8;
    var volume = $('.volume');
    volume.slider({
        range: 'min',
        min: 1,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event, ui) {
            song.volume = ui.value / 100;
        },
        stop: function(event,ui) {},
    });

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
});