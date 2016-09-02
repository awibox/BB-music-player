var data = {
    sound: [
        {
            artist: "Chaz Robinson",
            name: "Love Will Come Back Again",
            time: "03:56",
            src: "mp3/Chaz_Robinson_-_Love_Will_Come_Back_Again.mp3"
        },
        {
            artist: "Funky Stereo",
            name: "Funny Life",
            time: "02:55",
            src: "mp3/Funky_Stereo_-_Funny_Life.mp3"
        },
        {
            artist: "JekK",
            name: "First",
            time: "03:24",
            src: "mp3/JekK_-_First.mp3"
        },
        {
            artist: "Pokki_DJ",
            name: "Energy",
            time: "03:50",
            src: "mp3/Pokki_DJ_-_Energy.mp3"
        }
    ]
};

console.log(data);

for (var i = 0; i < data.sound.length;i++) {
    var template = '<div class="list__item" data-src="' + data.sound[i].src + '">' + data.sound[i].artist + ' - ' + data.sound[i].name + ' (' + data.sound[i].time + ')</div>';
    $('.list').append(template);
}

$('.list__item').click(function(){
    var PageSound = document.getElementById('PageSound');
    PageSound.src = $(this).attr('data-src');
    PageSoundPlay();
});

