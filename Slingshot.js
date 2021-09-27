class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 200
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x - 10, pointB.y + 10);
            line(pointA.x, pointA.y, pointB.x + 25, pointB.y + 10);
            //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
    }
    
}