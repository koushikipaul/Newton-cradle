class Rope{
    constructor(myBodyA,myPointB){
        var options = {
            bodyA: myBodyA,
            pointB: myPointB,
            stiffness: 1,
            length: 200
        }
        this.pointB = myPointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}   