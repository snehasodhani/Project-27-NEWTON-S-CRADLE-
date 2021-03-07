class Bob {
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
           restitution:1.2
           
        }
       

        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        ellipseMode(RADIUS)
        fill ("white");
        
        ellipse(pos.x,pos.y,25,25)
        pop ()
    }
}

          
        
      
      
    
      
        
       
    
    
