import Phaser from 'phaser';
import { PuzzleScene } from './PuzzleScene';

import {config} from './../../../index';

export class EndScene extends PuzzleScene {
  constructor () {
    super('End');
  }

  createLogo() {
    this.logo = this.add.sprite(config.scale.width / 2, 150, 'logo').setOrigin(0.5);
  }
  
  createGirl(x, y, origin, scale, flip) {
     this.girl = this.add.sprite(x, y, 'prettyGirl').setOrigin(origin)
      .setScale(scale)
      .setFlipX(flip);
  }

  create () {
    let orientation = this.scale.orientation;
    let center = config.scale.width / 2;

    this.createLogo();    

    if (orientation === Phaser.Scale.PORTRAIT) {
      this.createGirl(center, 450, 0.5, 0.5, true);
      this.createText('textEnd1', center, 450, "Great Job", "92px Arial", "#eaba4f");    
      this.createText('textEnd2', center, 550, "Can you solve \n every mystery?", "52px Arial", "#fcfcfa");

    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      this.createGirl(-65, 0, 0, 0.9, false);
      this.createText('textEnd1', center, 320, "Great Job", "92px Arial", "#eaba4f");    
      this.createText('textEnd2', center, 450, "Can you solve \n every mystery?", "52px Arial", "#fcfcfa");      
    }   
    this.createButton(center, 670);
    this.createText('textButton', center, 670, "Play Now", "42px Arial", "#fdf0a8");    

    let increaseSize = () => {
      this.tweens.add({
        targets: [this.button, this.textButton],       
        scaleX: 1.1,
        scaleY: 1.1,      
        ease: 'Linear',
        duration: 1000,
        onComplete: () => {
          decreaseSize();
        },
      });
    }    

    let decreaseSize = () => {
      this.tweens.add({
        targets: [this.button, this.textButton],       
        scaleX: 1,
        scaleY: 1,      
        ease: 'Linear',
        duration: 1000,
        onComplete: () => {
          increaseSize();
        },
      });
    }

    increaseSize();    
  }  
}