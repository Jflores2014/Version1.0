function setup() {
  createCanvas(400, 400);
  background(0);

  var data = [0,0,0,0,0,0];
  var begin = createButton("Begin");
  begin.mousePressed(round1);  
}

function round1(){
  start = Date.now();
  //print(start);


  //starttime()  
  var value1 = 10;
  var value2 = 32;
  var value3 = 78;


  button = createButton(value1);
  button.position(100, 250);
  button2 = createButton(value2);
  button2.position(200, 250);
  button3 = createButton(value3);
  button3.position(300, 250);

  function correct() {
 // let val = random(256);
  var end = Date.now();
  var diff = end - start
  //data[0] = diff
  //print(data)
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(round2)
  }
  button.mousePressed(correct);
  button2.mousePressed(incorrect);
  button3.mousePressed(incorrect);
  
}
function round2(){
  start = Date.now()
  next.remove()
  background(0)
  //print(start)


  //starttime()  
  var value1 = 48
  var value2 = 17
  var value3 = 90


  button = createButton(value1);
  button.position(100, 250);
  button2 = createButton(value2);
  button2.position(200, 250);
  button3 = createButton(value3);
  button3.position(300, 250);

  function correct(){
 // let val = random(256);
  var end = Date.now();
  var diff = end - start
  //data[1] = diff
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(round3)
  }
  button.mousePressed(incorrect);
  button2.mousePressed(correct);
  button3.mousePressed(incorrect);
  
}

function round3(){
  start = Date.now()
  next.remove()
  background(0)
  //print(start)


  //starttime()  
  var value1 = 36
  var value2 = 96
  var value3 = 69


  button = createButton(value1);
  button.position(100, 250);
  button2 = createButton(value2);
  button2.position(200, 250);
  button3 = createButton(value3);
  button3.position(300, 250);

  function correct() {
 // let val = random(256);
  var end = Date.now();
  var diff = end - start;
  //data[2] = diff;
  print("time: ");
  print(diff + "ms");
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(circle1);
  }
  button.mousePressed(correct);
  button2.mousePressed(incorrect);
  button3.mousePressed(incorrect);
  
}

function circle1(){
  start = Date.now()
  //print(start)
  next.remove()
  button.remove()
  button2.remove()
  button3.remove()
  background(0)
  print(start)

  //starttime()  
  var value1 = 32
  var value2 = 78
  var value3 = 10

  c1 = circle(100,250,value1);
  c2 = circle(200,250,value2);
  c3 = circle(300,250,value3);

  button = createButton(' A) ');
  button.position(100, 250);
  button2 = createButton(' B) ');
  button2.position(200, 250);
  button3 = createButton(' C) ');
  button3.position(300, 250);

  function correct() {
 // let val = random(256);
  var end = Date.now();
  var diff = end - start;
  //data[3]=diff
  print("time: ");
  print(diff + "ms");
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(circle2);
  }
  function circlePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 300, 250);
  if (d < 100) {
    correct()
  }
}
  button.mousePressed(incorrect2);
  button2.mousePressed(incorrect2);
  button3.mousePressed(correct);
  
}
function circle2(){
  start = Date.now()
  //print(start)
  next.remove()
  button.remove()
  button2.remove()
  button3.remove()
  background(0)
  print(start)

  //starttime()  
  var value1 = 48
  var value2 = 17
  var value3 = 90

  c1 = circle(100,250,value1);
  c2 = circle(200,250,value2);
  c3 = circle(300,250,value3);

  button = createButton(' A) ');
  button.position(100, 250);
  button2 = createButton(' B) ');
  button2.position(200, 250);
  button3 = createButton(' C) ');
  button3.position(300, 250);

  function correct() {
 // let val = random(256);
  var end = Date.now();
  var diff = end - start;
  //diff[4]=diff
  print("time: ");
  print(diff + "ms");
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(circle3);
  }
  button.mousePressed(incorrect2);
  button2.mousePressed(correct);
  button3.mousePressed(incorrect2);
  
}

function circle3(){
  start = Date.now();
  //print(start);
  next.remove();
  background(0);
  print(start);

  //starttime()  
  var value1 = 36;
  var value2 = 96;
  var value3 = 69;

  c1 = circle(100,250,value1);
  c2 = circle(200,250,value2);
  c3 = circle(300,250,value3);

  button = createButton(' A) ');
  button.position(100, 250);
  button2 = createButton(' B) ');
  button2.position(200, 250);
  button3 = createButton(' C) ');
  button3.position(300, 250);

  function correct() {
 // let val = random(256);
  var end = Date.now();
  var diff = end - start;
  //data[5]=diff
  print("time: ");
  print(diff + "ms");
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  next.mousePressed(round1);
  }
  button.mousePressed(correct);
  button2.mousePressed(incorrect2);
  button3.mousePressed(incorrect2);
  
}

/*
function round4(){
  start = Date.now()
  next.remove()
  background(0)
  print(start)

  let pos1 = random(0,120);
  let pos2 = random(120,240);
  let pos3 = random(240,360);
  c1 = circle(110,220,40);
  c2 = circle(pos2,pos3,70);
  c3 = circle(pos3,pos1,50);
  
  function mousePressed() {
  if(dist(mouseX,mouseY,110,220) < 30){
    var end = Date.now();
    var diff = end - start
    print("time: ")
    print(diff + "ms")
    background(0,128,0);
    but = createButton("Next round");
    but.position(20,100);
    //but.mousePressed(round1);
  }
  }
}
*/
function incorrect(){
  background(255,0,0);
}

function incorrect2(){
  print("wrong!");
}
/*
function circle3(){  
  let pos1 = random(0,120);
  let pos2 = random(120,240);
  let pos3 = random(240,360);
  c1 = circle(110,220,40);
  c2 = circle(pos2,pos3,70);
  c3 = circle(pos3,pos1,50);
  }

function mousePressed() {
  if(dist(mouseX,mouseY,110,220) < 30){
    background(0,128,0);
    but = createButton("Next round");
    but.position(20,100);
    but.mousePressed();
  }
*/

function smallestVal(a,b,c){
  if (a < b ) {
    if (a < c) {
      return a;
    }
    else {
      return c;
    }
  }
  else{
    if( b < c ) {
      return b;
    }
    else {
      return c;
    }
  }
  
}
