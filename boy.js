class Boy {
    constructor(x, y, width, height) {
      var options = {
           isStactic: true,
           restitution: 0,
          friction:0,
          density:0
      }
  
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  
      this.Body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      
      World.add(world, this.Body);
      this.image = loadImage("Plucking mangoes/boy.png");
    }
    display(){
      var paperpos = this.Body.position;
      push();
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("white");
      //scale(10);
      imageMode(CENTER);
      image(this.image, this.x,this.y, this.width, this.height);
      //rect(this.x,this.y,this.width,this.height);
      pop();
    }
  };
  