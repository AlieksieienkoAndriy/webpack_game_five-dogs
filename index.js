import Phaser from 'phaser';

import { BootScene } from './src/assets/scenes/BootScene';
import { EndScene } from './src/assets/scenes/EndScene';
import { GameScene } from './src/assets/scenes/GameScene';
import { PreloadScene } from './src/assets/scenes/PreloadScene';
import { StartScene } from './src/assets/scenes/StartScene';

export let config = {
    type: Phaser.AUTO,  
  
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 1075,
      height: 767    
    },
  
    dogsPosition: [
      {
        name:'dog1',
        circle: 'circle1',
        portret:{
          x: 110,
          y: 175,
          flip: true,
          scale: 0.6,
        },
        landscape:{
          x: 130,
          y: 210,
          flip: true,
          scale: 0.7,
        },     
      },
      {
        name:'dog2',
        circle: 'circle2',
        portret:{
          x: 100,
          y: 410,
          flip: false,
          scale: 0.7,
        },
        landscape:{
          x: 180,
          y: 540,
          flip: false,
          scale: 1,
        },      
      },
      {
        name:'dog3',      
        circle: 'circle3',
        portret:{
          x: 300,
          y: 340,
          flip: false,
          scale: 0.5,
        },
        landscape:{
          x: 500,
          y: 270,
          flip: true,
          scale: 0.7,
        },    
      },
      {
        name:'dog4',     
        circle: 'circle4',
        portret:{
          x: 400,
          y: 210,
          flip: false,
          scale: 0.5,
        },
        landscape:{
          x: 910,
          y: 200,
          flip: false,
          scale: 0.7,
        },    
      },
      {
        name:'dog5',      
        circle: 'circle5',
        portret:{
          x: 300,
          y: 520,
          flip: false,
          scale: 0.7,
        },
        landscape:{
          x: 920,
          y: 530,
          flip: false,
          scale: 0.8,
        },    
      },
    ],
  
    circlePosition:[
      {
        name:'circle1',      
        portret:{
          x: 60,
          y: 130,        
        },
        landscape:{
          x: 100,
          y: 165,        
        },     
      },
      {
        name:'circle2',      
        portret:{
          x: 60,
          y: 360,        
        },
        landscape:{
          x: 150,
          y: 520,        
        },     
      },
      {
        name:'circle3',      
        portret:{
          x: 250,
          y: 280,        
        },
        landscape:{
          x: 460,
          y: 240,        
        },     
      },
      {
        name:'circle4',      
        portret:{
          x: 350,
          y: 150,        
        },
        landscape:{
          x: 860,
          y: 165,        
        },     
      },
      {
        name:'circle5',      
        portret:{
          x: 250,
          y: 460,        
        },
        landscape:{
          x: 875,
          y: 500,        
        },     
      },
    ],
  
    scene: [BootScene, PreloadScene, StartScene, GameScene, EndScene], 
  }
  
  if(window.screen.availWidth < window.screen.availHeight) {
    config.scale.width = 535;
  }
  
  let game = new Phaser.Game(config);
