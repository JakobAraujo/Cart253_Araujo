

class endScreen extends Screen{
  constructor(x, y, tintColor, img){
    super(x, y, tintColor, img)
  }

    displayText(predator){
      if(predator.radius === 0){
      push();
      textAlign(CENTER);
      textSize(24);
      stroke(255);
      fill(255);
      text("The Tiger has Starved", this.x, this.y + 150);
      pop();
      }
    }

    display(predator){
      if(predator.radius === 0){
      push();
      imageMode(CENTER);
      tint(this.tint);
      image(this.img, this.x, this.y);
      pop();
      }
    }
}
