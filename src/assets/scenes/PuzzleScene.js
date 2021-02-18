import Phaser from 'phaser';

export class PuzzleScene extends Phaser.Scene {
  createDog(name, x, y, flip, scale, circle) {
    this[name] = this.add.sprite(x, y, 'dog').setOrigin(0, 0)
      .setInteractive()
      .setFlipX(flip)
      .setScale(scale)
      .on('pointerdown',() => {
        this.findSound.play();
        this.onFindItem(this[circle]);
      });
  };

  createButton(x, y) {
    this.button = this.add.sprite(x, y, 'button').setOrigin(0.5)
      .setInteractive()
      .once('pointerdown', () => {
        window.open('https://www.g5e.com/');
    }); 
  };

  createText(name, x, y, text, font, color) {
    this[name] = this.add.text(x, y, text, { 
      font: font,
      color: color,         
      align: 'center' 
    })
      .setOrigin(0.5);
  }; 
};  