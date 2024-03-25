const gameState = {
    onColor: 0xaaffaa,
    offColor: 0xffaaaa
  }
  
  function create() {
    gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
    gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
    
    // set gameState.rect2 as interactive here
    gameState.rect2.setInteractive();
    gameState.rect1.setInteractive();
    // create the pointerup listener for rect2 here
    gameState.rect2.on('pointerup', function() {
      gameState.rect1.fillColor = gameState.offColor;
      gameState.rect2.fillColor = gameState.onColor;
    });
    // create the pointerup listener for rect1 here
    gameState.rect1.on('pointerdown', functon() {
      gameState.rect1.fillColor = gameState.onColor;
      gameState.rect2.fillColor = gameState.offColor;
    });
  };
  
  
  const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 450,
    backgroundColor: 0x333333,
    scene: {
      create
    }
  }
  
  const game = new Phaser.Game(config)


  /*
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Input</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/