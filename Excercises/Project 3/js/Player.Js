"use strict";

class Player {
  constructor (s, x, y, radius) {
    this.speed = s;
    this.velocity = this.speed;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.spaceKey = 32;
  }

  movement() {
    if(keyIsDown(this.spaceKey)){
      this.velocity = 0;
    } else {
      this.velocity = this.speed;
      this.x += this.velocity;
    }
  }

  screenWrap(){
    if(this.x > windowWidth){
      this.x += -windowWidth;
    }
  }

  display(){
    ellipseMode(CENTER);
    fill(255, 0, 50);
    ellipse (this.x, this.y, this.radius);
  }

}
