let r, g, b;
let t, v, u;
var textx=0;
function setup() {
  // put setup code here
    createCanvas(1910, 915);
   x = width/0;
  y = height/8;
  
  //color    
  r = random(255);
  g = random(255);
  b = random(255);
  t = random(255);
  v = random(255);
  u = random(255);
}

function draw() {
  
    //background effect
    background(0,0,100);   
   fill(250,0,180,120);   
   stroke(255,255,0);   
   strokeWeight(5);   
   rect(random(width),random(height),random(200),random(0));
   
    fill(250,0,180,120);   
   stroke('white');   
   strokeWeight(5);   
   rect(random(width),random(height),random(300),random(0));
  
   //text 
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {  
   fill(t,v,u,); 
   noStroke();   
   textSize(30);   
   textFont("helvetica");   
   textStyle(ITALIC);   
   text("Abduct!",textx-370,600); 
  }
    }
          //Repeat
  if (textx > 2300){     
     textx = -125;   
  }else{     
     textx=textx + 5;   
  }

  
  //light    
  fill(204,204,204,150);
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      triangle(x+187, y+140, x+50, y+820, x+350, y+820);
    }
  }

  
  //UFO shape
  stroke(r, g, b)
  fill(r, g, b);
  triangle(x+327,y+150,x+190,y+250,x+53,y+150,);
  
  
    
  
  //Martian
  fill('green')
  stroke('black')
  strokeWeight(2)
  rect(x+170,y+120,40,30)
  ellipse(x+190,y+95,50)
  stroke('green')
  line(x+160,y+60,x+170,y+80)
  line(x+220,y+60,x+210,y+80)
  ellipse(x+220,y+60,5)
  ellipse(x+160,y+60,5)
  fill('black')
  stroke('black')
  ellipse(x+180,y+90,10)
  ellipse(x+200,y+90,10)
  
  //UFO capsule
  fill(t, v, u,100)
  stroke(t, v, u);
    strokeWeight(3)
          arc(x+190, y+150, 280, 200, 3.12, PI / 355);
          noFill();
  
  
  //movement
  y = y + random(-1, 1);
  x = x + 5;

  //repeat
  if (x > 1930) {
    x = -500;
  }


 


  
}

// Click to change color
function mousePressed() {

    
  let d = dist(360, 200, 360, 200);
  if (d < 10) {
    // Random color
    r = random(255);
    g = random(255);
    b = random(255);
     
    t = random(255);
    v = random(255);
    u = random(255);
  }
}