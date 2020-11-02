class Ball {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0.1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 60, options);
      this.radius = 60;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("blue");
      fill("pink");
      circle(0, 0, this.radius);
      pop();
    }
  };
  