class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.birdtrail = []
  }

  display() {
    if(this.body.velocity.x > 1 && this.body.position.x > 250){
      var positions = [this.body.position.x,this.body.position.y]
      this.birdtrail.push(positions);
    }
    super.display();
    for(var abc = 0;abc < this.birdtrail.length;abc++){
      image(this.smoke,this.birdtrail[abc][0],this.birdtrail[abc][1]);
    }
  }
}