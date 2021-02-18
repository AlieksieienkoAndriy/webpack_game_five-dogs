import Phaser from 'phaser';
// import backImg from '..sprites/back_five_dogs.jpg';
// import backImgPort from '..sprites/back_five_dogs_portret.jpg';

export class BootScene extends Phaser.Scene {
  constructor() {
      super('Boot');
  }
  preload() {
    this.load.image('background', 'src/assets/sprites/back_five_dogs.jpg');    
    this.load.image('background-portret', 'src/assets/sprites/back_five_dogs_portret.jpg');    
  }
  create() {
     this.scene.start('Preload')
  }   
}