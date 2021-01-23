"use strict";

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");;
    this.size = 50;
    this.x = this.canvas.width / 2;
    this.y = 350;
    this.direction = 0;
    this.speed = 3;
  }

  setDirection(direction) {
    if (direction === "right") {
      this.direction = 1;
    } else if (direction === "left") {
      this.direction = -1;
    }
  }

  screenCollisions() {
    this.x = this.x + this.direction * this.speed;
    let screenLeft = 0;
    let screenRight = this.canvas.width;

    if (this.x <= screenLeft) {
      this.setDirection("right");
    } else if (this.x + this.size >= screenRight) {
      this.setDirection("left");
    }
  }

  draw() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide() {}
}
