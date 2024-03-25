const gameState = {};

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png')
}

function create() {
  gameState.codey = this.add.sprite(50, 50, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
  }
}
const config = {
  height: 400,
  width: 300,
  scene: {
    preload,
    create,
    update,
  }
}

const game = new Phaser.Game(config);


/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Review</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/
