class Roof{
    constructor(x,y,width,height){
        this.Roof = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.Roof);
    }
    display(){
        var pos = this.Roof.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}