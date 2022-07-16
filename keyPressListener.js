class KeyPressListener {
  constructor(keyCode, callback) {
    let keySafe = true;

    this.keyDownFunction = e => {
      if (e.code === keyCode) {
        if (e.code === keyCode) {
          if (keySafe) {
            keySafe = false;
            callback();
          }
        }
      }
    };
    this.keyUpFunction = e => {
      if (e.code === keyCode) {
        keySafe = true;
      }
    };
    document.addEventListener("keydown", this.keyDownFunction);
    document.addEventListener("keyup", this.keyUpFunction);
  }

  unbind() {
    document.removeEventListener("keydown", this.keyDownFunction);
    document.removeEventListener("keyup", this.keyUpFunction);
  }
}
