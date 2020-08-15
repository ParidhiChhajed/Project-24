class Paper{
    constructor(){
       var options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
       }
    this.body = Bodies.circle(100,300,20,options);
    World.add (world,this.body)
    }

    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,20,20)
    }
}
