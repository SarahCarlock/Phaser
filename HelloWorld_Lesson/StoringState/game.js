// Define "gameState" here
const gameState = {
};

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle = this.add.circle(100,50,50,0x8cad94);
}

function update() {
  // Update the circle in gameState.circle here
  gameState.circle.y += 1;
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)



/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Storing State</title>
    <style>*{margin:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="game.js"></script>
  </head>
  <body>
  </body>
</html>
*/
