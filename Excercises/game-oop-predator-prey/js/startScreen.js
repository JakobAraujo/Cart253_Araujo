


class Screen {
  constructor(x, y, tintColor, img){
    this.x = x;
    this.y = y;
    this.tint = tintColor;
    this.img = img
  }


  display(){
    push();
    imageMode(CENTER);
    tint(this.tint);
    image(this.img, this.x, this.y);
    pop();
    }

}
