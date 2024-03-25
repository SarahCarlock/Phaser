// Create a create() function here:
function create() {
    this.add.text(100, 100, 'Welcome!');
  }
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#a0a0dd",
    // Add in the scene information in the config here:
    scene: { create};
  }
  
  const game = new Phaser.Game(config)
  


  /*index.html
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Start Making A Scene</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/