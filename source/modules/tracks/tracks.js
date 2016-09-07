import template from './tracks.hbs';
import './tracks.scss'

export default class Tracks {
    constructor(data, id) {
        for (let track in data.tracks) {
            let trackID = data.tracks[track].title;
            data.tracks[track].id = trackID.replace(/[\(\)]/g,'').replace(/\s+/g, '-').toLocaleLowerCase();
        }
        $(function () {
            $((id)? id : 'body').append(template(data));
        });
    }
};
