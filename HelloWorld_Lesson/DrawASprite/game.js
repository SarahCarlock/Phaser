function preload() {
    // Load in the sprite here!
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
  }
  
  function create() {
    // Create a sprite game object here!
    this.add.sprite(50, 50, 'codey');
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create,
      preload
      }
  }
  
  const game = new Phaser.Game(config)
  

  /*
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Draw A Sprite</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/