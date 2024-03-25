function preload() {
    // Load in the background image here!
    this.load.image('sky', 'https://content.codecademy.com/courses/learn-phaser/sky.jpg');
  }
  
  function create() {
    // Put the background image in the scene here!
    this.add.image(50, 50, 'sky');
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
    <title>Load An Image</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/
