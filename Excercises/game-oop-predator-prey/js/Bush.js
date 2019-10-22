//Bush
//
// A class that represents a bush
// Randomly generated around the canvass.
// if the Predator is standing inside of it
// they stop losing health.

class Bush {
  constructor(x, y, fillColor, radius) {
//This marks whether or not the predator is within the boundries of the bush.
    this.occupied = false;
    this.fillColor = fillColor;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

hiding(predator){
  let d = dist(this.x, this.y, predator.x, predator.y);
  if (d < this.radius + predator.radius) {
      this.occupied = true;
  }
}

display(){
  push();
  noStroke();
  fill(this.fillColor);
  ellipse(this.x, this.y, this.radius);
  pop();
  }
}
