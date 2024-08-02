var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('background', 'img/breakout_bg.png');
  this.load.image('paddle', 'img/paddle.png');
  this.load.image('brick', 'img/brick.png');
  this.load.spritesheet('ball', 'img/wobble.png', 20, 20);
  this.load.spritesheet('button', 'img/button.png', 120, 40);
}

function create ()
{
  this.add.image(400, 300, 'background');
  this.add.image(400, 300, '');
}

function update ()
{
}
