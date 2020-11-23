class SlingShot{

    constructor(bodyA, pointB){//slingshot takes one body and one point
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04

        }
        this.pointB = pointB;//assigning pointB to pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){//To make the bird fly when mouse is released

        this.sling.bodyA = null;//cut the bird from the sling
    }

    display(){
        if(this.sling.bodyA){//if the bird is on the sling, then the line between the bird and the point is drawn
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }
        
    }
}