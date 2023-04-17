/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */
 
let location1;  // Location of shape
let velocity1;  // Velocity of shape
let gravity1;   // Gravity acts at the shape's acceleration

let location2;  // Location of shape
let velocity2;  // Velocity of shape
let gravity2;   // Gravity acts at the shape's acceleration

function setup() { //javascript에서 함수를 선언하는 방법
  createCanvas(640,360); //p5.js에서의 size()함수
  location1 = createVector(100,100); //p5.js에서의 PVector 생성 방법
  velocity1 = createVector(1.5,2.1);
  gravity1= createVector(0,0.2);
  
  location2 = createVector(350,350);
  velocity2 = createVector(2,2);
  gravity2 = createVector(0,1);
    
}

function draw() {
  background(0);
  
  // Add velocity1 to the location1.
  location1.add(velocity1);
  // Add gravity1 to velocity1
  velocity1.add(gravity1);
  
  // Add velocity1 to the location1.
  location2.add(velocity2);
  // Add gravity1 to velocity1
  velocity2.add(gravity2);

  
  // Bounce off edges
if ((location1.x > width) || (location1.x < 0)) {
  velocity1.x = velocity1.x * -1;
}
  
if (location1.y > height) {
  // We're reducing velocity1 ever so slightly 
  // when it hits the bottom of the window
  velocity1.y = velocity1.y * -0.95; 
  location1.y = height;
}
  
// Bounce off edges
if ((location2.x > width) || (location2.x < 0)) {
  velocity2.x = velocity2.x * -1;
}
  
if (location2.y > height) {
  // We're reducing velocity1 ever so slightly 
  // when it hits the bottom of the window
  velocity2.y = velocity2.y * -0.95; 
  location2.y = height;
}

  // Display circle at location1 vector
stroke(255);
strokeWeight(2);
fill(color(0,0,255));
ellipse(location1.x,location1.y,48,48);
fill(color(128,255,0));
ellipse(location2.x,location2.y,70,70);
}