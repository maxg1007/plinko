class Particles {
    constructor(x,y){
        this.r=10
        this.body=Bodies.circle(x,y,this.r)
        World.add(world,this.body)
        this.color=color(random(0,255),random(0,255),random(0,255))

    }
    display(){

        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(this.body.position.x,this.body.position.y,this.r)

    }
}