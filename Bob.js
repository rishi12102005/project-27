class Ball{
    constructor(x,y,radius){
        this.Ball = Bodies.circle(x,y,radius);
      this.radius = radius;
        World.add(world,this.Ball);
    }
    display(){
        var pos = this.Ball.position;
        ellispeMode(CENTER);
        circle(pos.x,pos.y,this.radius*2);
    }
}