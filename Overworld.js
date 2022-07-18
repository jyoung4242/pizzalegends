class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const cameraPerson = this.map.gameObjects.hero;
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction,
          map: this.map,
        });
        object.sprite.draw(this.ctx, cameraPerson);
      });
      this.map.drawLowerImage(this.ctx, cameraPerson);
      Object.values(this.map.gameObjects)
        .sort((a, b) => {
          return a.y - b.y;
        })
        .forEach(object => {
          object.update({
            arrow: this.directionInput.direction,
            map: this.map,
          });
          object.sprite.draw(this.ctx, cameraPerson);
        });
      this.map.drawUpperImage(this.ctx, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  bindHeroPositionCheck() {
    document.addEventListener("PersonWalkingComplete", e => {
      if (e.detail.whoID === "hero") {
        this.map.checkForFootstepCutscene();
      }
    });
  }

  bindActionInput() {
    new KeyPressListener("Enter", () => {
      this.map.checkForActionCutscenes();
    });
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;
    this.map.mountObjects();
  }

  init() {
    this.startMap(window.OverworldMaps.DemoRoom);
    this.directionInput = new directionInput();
    this.directionInput.init();
    this.bindActionInput();
    this.bindHeroPositionCheck();
    this.startGameLoop();

    /*     this.map.startCutscene([
      {
        type: "battle",
        enemyId: "beth",
      },
    ]); */
  }
}
