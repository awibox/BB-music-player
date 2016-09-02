import template from './player.hbs';
import './player.scss'

export default class Player {
    constructor(data, id) {
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
            $((id)? id : 'body').append(template(data));
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
        });
    }
};
