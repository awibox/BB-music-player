import template from './content.hbs';
import './content.scss'

console.log('-- content module --');
export default class Content {
    constructor(data) {
        console.log(data);
        $(function () {
            $(".page").append(template(data));
        });
    };
};

