function create() {
    let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
    let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
    let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
    let circle4 = this.add.circle(300, 400, 10, 0x00E030);
    let circle5 = this.add.circle(450, 450, 150, 0x8cad94);
    // Add in a circle here!
  
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
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
    <title>Draw A Circle</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>

*/