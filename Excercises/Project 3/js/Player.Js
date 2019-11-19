"use strict";

class Player {
  constructor (s, v, x, y, radius) {
    this.speed = s;
    this.velocity = v;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.spaceKey = 32;
  }

  movement() {
    if(keyIsDown(this.spaceKey)){
      this.velocity = 0;
    } else {
      this.velocity = 5;
      this.x = this.x + this.velocity;
    }
  }

  display(){
    fill(255, 0, 50);
    ellipse (this.x, this.y, this.radius);
  }

}
