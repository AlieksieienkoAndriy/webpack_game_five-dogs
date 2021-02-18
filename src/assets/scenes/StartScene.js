import Phaser from 'phaser';
import { PuzzleScene } from './PuzzleScene';

import {config} from '../../index';

export class StartScene extends PuzzleScene {
  constructor () {    
    super('Start');
  }  

  create () {
    let orientation = this.scale.orientation;      
    let center = config.scale.width / 2;

    this.theme = this.sound.add('theme')
      .play({volume: 0.3});
      
    if (orientation === Phaser.Scale.PORTRAIT) {
      this.createText('text1', (center - 50), 300, "5 Hidden Dogs", "38px Arial Black", "#fcfcfa");
      this.createText('text2', center, 400, "Can you spot them?", "38px Arial Black", "#fcfcfa");       
      
      this.dog = this.add.sprite(450, 300, 'dog')
        .setFlipX(true);       

    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      this.createText('text1', (center - 50), 300, "5 Hidden Dogs", "52px Arial Black", "#fcfcfa");
      this.createText('text2', center, 400, "Can you spot them?", "52px Arial Black", "#fcfcfa");        
      
      this.dog = this.add.sprite(800, 280, 'dog')
        .setFlipX(true);        
    }      
    this.createButton(center, 670);
    this.createText('textButton', center, 670, "Play Now", "42px Arial", "#fdf0a8");      

    this.tweens.add({
      targets: [this.text1, this.text2, this.dog],       
      scaleX: 1.2,
      scaleY: 1.2,      
      ease: 'Linear',
      duration: 4000,
    });   

    setTimeout(() => {      
      this.scene.start('Game');
    }, 4000);     
  }
}