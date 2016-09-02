import './../build/sass/build.scss';
import data from './data.js';

import Content from './../modules/content/content';
import Player from './../modules/player/player';

new Content(data);
new Player();

import './../build/sass/retina.scss';