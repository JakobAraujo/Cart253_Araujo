

class endScreen extends Screen{
  constructor(x, y, tintColor, img, begin){
    super(x, y, tintColor, img);
    this.begin = begin;
  }

    death(predator){
    if(this.begin > 1){
      if(predator.radius <= 0){
        //noLoop();
      }
    }
  }

    display(predator){
    if(predator.begin === 3){
      push();
      background(0);
      textAlign(CENTER);
      textSize(24);
      stroke(255);
      fill(255);
      text("The Tiger has Starved", this.x, this.y + 150);
      //image
      imageMode(CENTER);
      tint(this.tint);
      image(this.img, this.x, this.y);
      pop();
      noLoop();
    }
  }
}
