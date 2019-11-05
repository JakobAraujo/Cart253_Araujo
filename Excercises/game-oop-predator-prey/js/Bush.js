//Bush
//
// A class that represents a bush
// Randomly generated around the canvass.
// if the Predator is standing inside of it
// they stop losing health.

class Bush {
  constructor(x, y, fillColor, radius) {
//This marks whether or not the predator is within the boundries of the bush.
    this.occupied = 0;
    this.fillColor = fillColor;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

hiding(predator){ //checks if the predator is in the bush and makes them invincible if so.
  let d = dist(this.x, this.y, predator.x, predator.y);
  if (d < this.radius + predator.radius) {

    this.occupied = 1; //1 = predator is in the bush.
    predator.health = predator.health; //makes predator invincible.
    console.log(this.occupied);
  } else {
    this.occupied = 0; //0 = predator is not in the bush.
    predator.health = predator.health - predator.healthLossPerMove; // makes the predator shrink with their health.
    predator.health = constrain(predator.health, 0, predator.maxHealth);
    console.log(this.occupied);
  }
}

display(){
  push();
  noStroke();
  fill(this.fillColor);
  ellipse(this.x, this.y, this.radius * 2);
  pop();
  }
}
