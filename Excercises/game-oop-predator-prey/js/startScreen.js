


class Screen {
  constructor(x, y, tintColor, img){
    this.x = x;
    this.y = y;
    this.tint = tintColor;
    this.img = img;

  }

  display(){
    push();
    background(0);
    imageMode(CENTER);
    tint(this.tint);
    image(this.img, this.x, this.y);
    textAlign(CENTER);
    textSize(24);
    stroke(255);
    fill(255);
    text("A Veneer Over Savagery.", this.x, this.y + 150);
    pop();
  }
}
