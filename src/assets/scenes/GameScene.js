import Phaser from 'phaser';
import { PuzzleScene } from './PuzzleScene';

import {config} from './../../../index';

export class GameScene extends PuzzleScene {
  constructor() {
    super('Game');
    this.count = 0;    
  }

  onFindItem (circle) {
    !circle.visible && this.count++;
    circle.visible = true;
    circle.play('surround');

    if(this.count === 5) {
      this.finalSound.play();

      setTimeout(() => {
        this.scene.start('End');
      }, 2000);
    }     
  };

  createBackground(image) {
    this.background = this.add.sprite(0, 0, image).setOrigin(0);
  } 

  createCircle(name, x, y) {
    this[name] = this.add.sprite(x, y, 'circle', 'circle8')
      .setOrigin(0);
    this[name].visible = false;   

    const frames = this[name].anims.generateFrameNames('circle', {
      prefix: 'circle',
      start: 1,
      end: 8,
    });   

    this[name].anims.create({
      key: 'surround',
      frames,
      framesRate: 8,
      repeat: 0
    });      
  }

  create () {
    let orientation = this.scale.orientation;      

    this.findSound = this.sound.add('dog');
    this.finalSound = this.sound.add('complete');    
    
    if (orientation === Phaser.Scale.PORTRAIT) {     
      this.createBackground('background-portret');     
      
      config.dogsPosition.forEach(dog => {
        this.createDog(dog.name, dog.portret.x, dog.portret.y, dog.portret.flip, dog.portret.scale, dog.circle);
      });

      config.circlePosition.forEach(circle => {
        this.createCircle(circle.name, circle.portret.x, circle.portret.y);
      });      

    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      this.createBackground('background');      
      
      config.dogsPosition.forEach(dog => {
        this.createDog(dog.name, dog.landscape.x, dog.landscape.y, dog.landscape.flip, dog.landscape.scale, dog.circle);
      });

      config.circlePosition.forEach(circle => {
        this.createCircle(circle.name, circle.landscape.x, circle.landscape.y);
      });         
    }    

    this.createButton(config.scale.width / 2, 670);
    this.createText('textButton', config.scale.width / 2, 670, "Play Now", "42px Arial", "#fdf0a8");
  };
}