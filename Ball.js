class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
    
  }

  display() {
    fill("brown");
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
