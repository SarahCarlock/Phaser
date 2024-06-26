class Level extends Phaser.Scene {
    constructor(key) {
      super(key);
      this.levelKey = key;
      this.nextLevel = {
        Level1: "Level2",
        Level2: "Level3",
        Level3: "Level4",
      };
    }
  
    preload() {
      this.load.image(
        "platform",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/platform.png"
      );
      this.load.image(
        "snowflake",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/snowflake.png"
      );
      this.load.spritesheet(
        "campfire",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/campfire.png",
        { frameWidth: 32, frameHeight: 32 }
      );
      this.load.spritesheet(
        "codey",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/codey.png",
        { frameWidth: 72, frameHeight: 90 }
      );
  
      this.load.image(
        "bg1",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/mountain.png"
      );
      this.load.image(
        "bg2",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/trees.png"
      );
      this.load.image(
        "bg3",
        "https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/snowdunes.png"
      );
    }
  
    create() {
      gameState.active = true;
  
      gameState.player = this.physics.add.sprite(125, 110, "codey").setScale(0.5);
  
      gameState.platforms = this.physics.add.staticGroup();
  
      this.createAnimations();
      this.levelSetup();
  
      this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
      this.physics.world.setBounds(
        0,
        0,
        gameState.width,
        gameState.height + gameState.player.height
      );
  
      this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
      gameState.player.setCollideWorldBounds(true);
  
      this.physics.add.collider(gameState.player, gameState.platforms);
  
      gameState.cursors = this.input.keyboard.createCursorKeys();
    }
  
    createPlatform(xIndex, yIndex) {
      // Creates a platform evenly spaced along the two indices.
      // If either is not a number it won't make a platform
      if (typeof yIndex === "number" && typeof xIndex === "number") {
        gameState.platforms
          .create(220 * xIndex, yIndex * 70, "platform")
          .setOrigin(0, 0.5)
          .refreshBody();
      }
    }
  
    createAnimations() {
      this.anims.create({
        key: "run",
        frames: this.anims.generateFrameNumbers("codey", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("codey", { start: 4, end: 5 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "jump",
        frames: this.anims.generateFrameNumbers("codey", { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "fire",
        frames: this.anims.generateFrameNumbers("campfire"),
        frameRate: 10,
        repeat: -1,
      });
    }
  
    levelSetup() {
      for (const [xIndex, yIndex] of this.heights.entries()) {
        this.createPlatform(xIndex, yIndex);
      }
    }
  
    update() {
      if (gameState.active) {
        if (gameState.cursors.right.isDown) {
          gameState.player.flipX = false;
          gameState.player.setVelocityX(gameState.speed);
          gameState.player.anims.play("run", true);
        } else if (gameState.cursors.left.isDown) {
          gameState.player.flipX = true;
          gameState.player.setVelocityX(-gameState.speed);
          gameState.player.anims.play("run", true);
        } else {
          gameState.player.setVelocityX(0);
          gameState.player.anims.play("idle", true);
        }
  
        if (
          Phaser.Input.Keyboard.JustDown(gameState.cursors.space) &&
          gameState.player.body.touching.down
        ) {
          gameState.player.anims.play("jump", true);
          gameState.player.setVelocityY(-500);
        }
  
        if (!gameState.player.body.touching.down) {
          gameState.player.anims.play("jump", true);
        }
  
        // Check player height and add camera shake here!
        if (gameState.player.y > gameState.height) {
          this.cameras.main.shake(240, 0.01, false, function (camera, progress) {
            if (progress > 0.9) {
              this.scene.restart(this.levelKey);
            }
          });
        }
      }
    }
  }
  
  class Level1 extends Level {
    constructor() {
      super("Level1");
      this.heights = [4, 7, 5, null, 5, 4, null, 4, 4];
    }
  }
  
  class Level2 extends Level {
    constructor() {
      super("Level2");
      this.heights = [5, 4, null, 4, 6, 4, 6, 5, 5];
    }
  }
  
  class Level3 extends Level {
    constructor() {
      super("Level3");
      this.heights = [6, null, 6, 4, 6, 4, 5, null, 4];
    }
  }
  
  class Level4 extends Level {
    constructor() {
      super("Level4");
      this.heights = [4, null, 3, 6, null, 6, null, 5, 4];
    }
  }
  
  const gameState = {
    speed: 240,
    ups: 380,
    width: 2000,
    height: 600,
  };
  
  const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 600,
    fps: { target: 60 },
    backgroundColor: "b9baff",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 800 },
        enableBody: true,
      },
    },
    scene: [Level1, Level2, Level3, Level4],
  };
  
  const game = new Phaser.Game(config);
  