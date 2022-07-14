class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.directionUpdate = {
      down: ["y", 1],
      up: ["y", -1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      console.log(this.direction);
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }

  updateSprite(state) {
    console.log(state.arrow, this.movingProgressRemaining);
    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
      console.log("here");
      this.sprite.setAnimation["idle-" + this.direction];
      return;
    }

    if (this.movingProgressRemaining > 0) {
      console.log("i shouldnotbehere");
      this.sprite.setAnimation("walk-" + this.direction);
    }
  }

  update(state) {
    this.updateSprite(state);
    this.updatePosition();

    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemaining = 16;
    }
  }
}
