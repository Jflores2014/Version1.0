let r, g, b;
let mode = 0;
let xpos, ypos;
let start = 100;

function setup() {
  createCanvas(400, 400);
  r, g, b = 0;
  r_small = 0;
}

//===== Coordinates for positions ======//
var xpos_3 = [
  [30, 200, 250],
  [100, 200 , 300],
  [350, 30, 300]
]

var ypos_3 = [
  [250, 200, 30],
  [50, 50, 300],
  [50, 350, 100]
]

var xpos_5 = [
  [50, 150, 250, 100, 200],
  [250, 150, 50, 100, 200],
  [100, 150, 250, 50, 200],
]

var ypos_5 = [
  [150, 150, 150, 275, 275],
  [150, 150, 150, 275, 275],
  [275, 150, 150, 150, 275]
]

var xpos_9 = [
  [100,200,300,100,200,300,100,200,300],
  [300,200,300,100,200,100,100,200,300],
  [300,200,100,100,200,300,100,200,300]
]

var ypos_9 = [
  [100,100,100,200,200,200,300,300,300],
  [200,100,100,200,200,100,300,300,300],
  [100,100,100,200,200,200,300,300,300]
]

var xpos_25 = [

[333,133,200,266,333,67,133,200,266,67,67,133,200,266,333,67,133,200,266,333,67,133,200,266,333],
[200,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,67,266,333],
[333,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,200,266,67,67,133,200,266,333]
]

var ypos_25 = [
  [133,67,67,67,67,133,133,133,133,67,200,200,200,200,200,266,266,266,266,266,333,333,333,333,333],
  [333,67,67,67,67,133,133,133,133,133,200,200,200,200,200,266,266,266,266,266,333,333,67,333,333],
  [266,67,67,67,67,133,133,133,133,133,200,200,200,200,200,266,266,266,266,67,333,333,333,333,333]
  
]
//======================================//



function draw() {
  background(127);
  start = Date.now();
  print(start + "ms");
  switch(mode){
    /*Case 0-2: 3 circles
      Case 3-5: 5 circles  
      Case 6-8: 9 circles
      Case 9-11: 25 circles
    */
    
    case 0:
      xpos = xpos_3[0];
      ypos = ypos_3[0];
      r_small = 30;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 100);
      c3 = circle(xpos[2], ypos[2], 50);
      fill(r, g, b);

      break;
      
    case 1:
      fill(255,255,255);
      xpos = xpos_3[1];
      ypos = ypos_3[1];
      r_small = 40;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 100);
      c3 = circle(xpos[2], ypos[2], 50);


      fill(r, g, b);
      break;
    case 2:
      fill(255,255,255);
      xpos = xpos_3[2];
      ypos = ypos_3[2];
      r_small = 40;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 100);
      c3 = circle(xpos[2], ypos[2], 50);
      
      fill(r, g, b);
      break;
      
    case 3:
      fill(255,255,255);
      xpos = xpos_5[0];
      ypos = ypos_5[0];
      r_small = 20;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 40);
      c3 = circle(xpos[2], ypos[2], 35);
      c4 = circle(xpos[3], ypos[3], 50);
      c5 = circle(xpos[4], ypos[4], 30);
      
      fill(r, g, b);
      break;
      
    case 4:
      fill(255,255,255);
      xpos = xpos_5[1];
      ypos = ypos_5[1];
      r_small = 30;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 50);
      c3 = circle(xpos[2], ypos[2], 35);
      c4 = circle(xpos[3], ypos[3], 45);
      c5 = circle(xpos[4], ypos[4], 60);
      
      fill(r, g, b);
      break;
      
    case 5:
      fill(255,255,255);
      xpos = xpos_5[2];
      ypos = ypos_5[2];
      r_small = 60;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 70);
      c3 = circle(xpos[2], ypos[2], 75);
      c4 = circle(xpos[3], ypos[3], 65);
      c5 = circle(xpos[4], ypos[4], 80);
      
      fill(r, g, b);
      break;
      
    case 6:
      fill(255,255,255);
      xpos = xpos_9[0];
      ypos = ypos_9[0];
      r_small = 50;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 60);
      c3 = circle(xpos[2], ypos[2], 75);
      c4 = circle(xpos[3], ypos[3], 65);
      c5 = circle(xpos[4], ypos[4], 80);
      c6 = circle(xpos[5], ypos[5], 60);
      c7 = circle(xpos[6], ypos[6], 64);
      c8 = circle(xpos[7], ypos[7], 55);
      c9 = circle(xpos[8], ypos[8], 69);
      
      fill(r, g, b);
      break;
      
    case 7:
      fill(255,255,255);
      xpos = xpos_9[1];
      ypos = ypos_9[1];
      
      r_small = 20;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 30);
      c3 = circle(xpos[2], ypos[2], 35);
      c4 = circle(xpos[3], ypos[3], 27);
      c5 = circle(xpos[4], ypos[4], 40);
      c6 = circle(xpos[5], ypos[5], 33);
      c7 = circle(xpos[6], ypos[6], 25);
      c8 = circle(xpos[7], ypos[7], 50);
      c9 = circle(xpos[8], ypos[8], 45);
      
      fill(r, g, b);
      break;
      
    case 8:
      fill(255,255,255);
      xpos = xpos_9[2];
      ypos = ypos_9[2];
      
      r_small = 45;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 50);
      c3 = circle(xpos[2], ypos[2], 55);
      c4 = circle(xpos[3], ypos[3], 60);
      c5 = circle(xpos[4], ypos[4], 70);
      c6 = circle(xpos[5], ypos[5], 66);
      c7 = circle(xpos[6], ypos[6], 54);
      c8 = circle(xpos[7], ypos[7], 59);
      c9 = circle(xpos[8], ypos[8], 68);
      
      fill(r, g, b);
      break;
      
    case 9:
      fill(255,255,255);
      xpos = xpos_25[0];
      ypos = ypos_25[0];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 19);
      c3 = circle(xpos[2], ypos[2], 40);
      c4 = circle(xpos[3], ypos[3], 32);
      c5 = circle(xpos[4], ypos[4], 20);
      c6 = circle(xpos[5], ypos[5], 25);
      c7 = circle(xpos[6], ypos[6], 32);
      c8 = circle(xpos[7], ypos[7], 22);
      c9 = circle(xpos[8], ypos[8], 40);
      c10 = circle(xpos[9], ypos[9], 19);
      c11 = circle(xpos[10], ypos[10], 17);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 33);
      c14 = circle(xpos[13], ypos[13], 41);
      c15 = circle(xpos[14], ypos[14], 42);
      c16 = circle(xpos[15], ypos[15], 28);
      c17 = circle(xpos[16], ypos[16], 18);
      c18 = circle(xpos[17], ypos[17], 39);
      c19 = circle(xpos[18], ypos[18], 22);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 28);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 21);
      c24 = circle(xpos[23], ypos[23], 26);
      c25 = circle(xpos[24], ypos[24], 24);
      
      fill(r, g, b);
      break;
      
    case 10:
      fill(255,255,255);
      xpos = xpos_25[1];
      ypos = ypos_25[1];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 19);
      c3 = circle(xpos[2], ypos[2], 20);
      c4 = circle(xpos[3], ypos[3], 40);
      c5 = circle(xpos[4], ypos[4], 34);
      c6 = circle(xpos[5], ypos[5], 22);
      c7 = circle(xpos[6], ypos[6], 39);
      c8 = circle(xpos[7], ypos[7], 25);
      c9 = circle(xpos[8], ypos[8], 30);
      c10 = circle(xpos[9], ypos[9], 34);
      c11 = circle(xpos[10], ypos[10], 21);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 44);
      c14 = circle(xpos[13], ypos[13], 41);
      c15 = circle(xpos[14], ypos[14], 19);
      c16 = circle(xpos[15], ypos[15], 20);
      c17 = circle(xpos[16], ypos[16], 30);
      c18 = circle(xpos[17], ypos[17], 34);
      c19 = circle(xpos[18], ypos[18], 40);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 40);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 21);
      c24 = circle(xpos[23], ypos[23], 45);
      c25 = circle(xpos[24], ypos[24], 24);
      
      fill(r, g, b);
      break;

    case 11:
      fill(255,255,255);
      xpos = xpos_25[2];
      ypos = ypos_25[2];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 19);
      c3 = circle(xpos[2], ypos[2], 20);
      c4 = circle(xpos[3], ypos[3], 30);
      c5 = circle(xpos[4], ypos[4], 40);
      c6 = circle(xpos[5], ypos[5], 18);
      c7 = circle(xpos[6], ypos[6], 22);
      c8 = circle(xpos[7], ypos[7], 25);
      c9 = circle(xpos[8], ypos[8], 30);
      c10 = circle(xpos[9], ypos[9], 34);
      c11 = circle(xpos[10], ypos[10], 35);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 17);
      c14 = circle(xpos[13], ypos[13], 31);
      c15 = circle(xpos[14], ypos[14], 19);
      c16 = circle(xpos[15], ypos[15], 20);
      c17 = circle(xpos[16], ypos[16], 33);
      c18 = circle(xpos[17], ypos[17], 39);
      c19 = circle(xpos[18], ypos[18], 17);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 16);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 21);
      c24 = circle(xpos[23], ypos[23], 26);
      c25 = circle(xpos[24], ypos[24], 24);
      
      fill(r, g, b);
      break;
    case 12:
      textAlign(CENTER);
      text('Thanks for participating!', width / 2, height / 2);
  }
}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, xpos[0], ypos[0]);
  if (d < r_small/2) {
    r = 0;
    g = 128;
    b = 0;
    var end = Date.now();
    var diff = end - start;
    //data[3]=diff
    print("time: ");
    print(diff + "ms");
    background(0,128,0);

    mode++;
    
    draw();
  }
  else{
    r = 255;
    g = 0;
    b = 0;
  }
  
}2