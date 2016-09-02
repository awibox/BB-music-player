import template from './player.hbs';
import './player.scss'

export default class Player {
    constructor(data, id) {
        $(function () {
            $((id)? id : 'body').append(template(data));
        });
    }
};
