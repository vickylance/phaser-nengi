import { Game } from "phaser";
import LoadGame from "./scenes/LoadGame";

const game = new Game({
  width: 640,
  height: 360,
  type: Phaser.WEBGL,
  disableContextMenu: true,
  scene: [LoadGame],
  title: "Treasure Hunt",
  parent: "root"
});

function resize() {
  const canvas = document.querySelector("canvas");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}

window.onload = () => {
  resize();
  window.addEventListener("resize", resize, false);
};

// This is for preventing re-run multiple scenes
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
