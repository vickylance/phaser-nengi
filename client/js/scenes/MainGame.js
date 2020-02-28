import { Scene } from "phaser";
import { CST } from "../constants";
import Images from "../images";
import Data from "../data";

class MainGame extends Scene {
  constructor() {
    super({ key: CST.SCENES.GAME });
  }

  init() {
    this.playerSpeed = 1.5;
    this.isPlayerAlive = true;
  }

  preload() {
    // load images
    this.load.atlas(
      "spaceShooter",
      Images["spaceShooter"],
      Data.json["spaceShooter"]
    );
    this.load.image("background", Images["purple"]);
  }

  create() {
    const height = this.sys.game.config.height;
    const width = this.sys.game.config.width;
    this.input.mouse.disableContextMenu();

    const bg = this.add.sprite(0, 0, "background");
    bg.setOrigin(0, 0);
    bg.setScale(0.6);

    var atlasTexture = this.textures.get("spaceShooter");

    var frames = atlasTexture.getFrameNames();

    for (var i = 0; i < frames.length; i++) {
      var x = Phaser.Math.Between(0, 800);
      var y = Phaser.Math.Between(0, 600);
      console.log(frames[i]);
      this.add.image(x, y, "spaceShooter", frames[i]);
    }

    // player
    // this.player = this.add.sprite(40, height / 2, "player");
    // this.player.setScale(0.5);
  }

  update() {}

  gameOver() {}
}

export default MainGame;
