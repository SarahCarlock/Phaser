function preload() {
    this.load.image('bug1', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png');
    this.load.image('bug2', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png');
    this.load.image('bug3', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png');
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/physics/codey.png');
  }
  
  const gameState = {};
  
  function create() {
    gameState.player = this.physics.add.sprite(225, 440, 'codey').setScale(.5);
    
    const platforms = this.physics.add.staticGroup();
  
    platforms.create(225, 510, 'platform');
  
    // Add your code below:
    gameState.player.setCollideWorldBounds(true);
    this.physics.add.collider(gameState.player, platforms);
  }
  
  function update() {
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        enableBody: true,
      }
    },
    scene: {
      preload,
      create,
      update
    }
  };
  
  const game = new Phaser.Game(config);
  
  /*
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Bug Dodger</title>
  <style>
    canvas {
      width: 100%;
    }
  </style>

</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.min.js"></script>

  <script defer src="game.js"></script>
</body>

</html>
*/
