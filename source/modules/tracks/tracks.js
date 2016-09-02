import template from './tracks.hbs';
import './tracks.scss'

export default class Tracks {
    constructor(data, id) {
        $(function () {
            $((id)? id : 'body').append(template(data));
            $('.tracks__item').click(function(){
                var PageSound = document.getElementById('PageSound');
                PageSound.src = $(this).attr('data-src');
                PageSoundPlay();
            });
            function PageSoundPlay()
            {
                var nowTime = new Date().getTime();
                var PageSound = document.getElementById('PageSound');
                localStorage['PageSound'] = nowTime;
                PageSound.play();
            }
        });
    }
};
