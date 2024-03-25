function create() {
    // Change "Codey's Adventures\n  in Code World" to the name of your game
    this.add.text(50, 100, "Cody's Adventures\n  in Code World", { font: "40px Times New Roman", fill: "#ffa0d0"});
  
    // Change "by Codecademy" to your name!
    this.add.text(130, 300, "by Sarandipity", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create
      }
  };
  
  const game = new Phaser.Game(config);
  

/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Codey Adventures</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/