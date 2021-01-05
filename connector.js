class Connector{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.4,
            length : 10
        }

this.pointB = pointB;

        this.connector = (Constraint.create, options)
        World.add(world, this.connector);
    }

fly(){
    this.connector.bodyA = null;
}

    display(){
        if(this.connector.bodyA){
        var pointA = this.connector.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(this.pointA, this.pointA, this.pointB, this.pointB);
    }
}
}