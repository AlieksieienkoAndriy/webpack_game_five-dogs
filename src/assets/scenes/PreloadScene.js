import Phaser from 'phaser';

import dogImg from '../sprites/doggy.png';
import circleImg from '../sprites/circle.png';

import circleJson from '../sprites/circle.json';

import logoImg from '../sprites/logo.png';
import girlImg from '../sprites/char.png';
import buttonImg from '../sprites/btn.png';

// import themeMp3 from '../sounds/theme.mp3';
// import dogMp3 from '../sounds/dog.mp3';
// import complateMp3 from '../sounds/complete.mp3';

export class PreloadScene extends Phaser.Scene {
  constructor() {
      super('Preload');
  }
  preload() {
    this.load.image('dog', dogImg);
    this.load.atlas('circle', circleImg, circleJson);
    this.load.image('logo', logoImg);
    this.load.image('prettyGirl', girlImg);
    this.load.image('button', buttonImg);
    this.load.audio('theme', '/src/assets/sounds/theme.mp3');
    this.load.audio('dog', '/src/assets/sounds/dog.mp3');
    this.load.audio('complete', '/src/assets/sounds/complete.mp3');     
  }
  create() {
     this.scene.start('Start');
  }
} 