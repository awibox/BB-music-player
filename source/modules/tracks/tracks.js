import template from './tracks.hbs';
import './tracks.scss'

export default class Tracks {
    constructor(data, id) {
        $(function () {
            $((id)? id : 'body').append(template(data));
        });
    }
};
