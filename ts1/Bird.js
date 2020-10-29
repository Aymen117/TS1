class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
  }

  display() {
    fill("blue");
    super.display();
  }
}
