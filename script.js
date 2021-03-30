function setup() {
  createCanvas(400, 400);
  background(0);

  var begin = createButton("Begin");
  begin.mousePressed(n3);  
}

//Global Variables ////////////////////////////

var data = [0,0,0,0,0,0];

var values_3 = [
  [10,32,78],
  [48,17,90],
  [36,96,69]
]

var values_5 = [
  [9, 13, 80, 42, 33],
  [121, 21, 12, 212, 122],
  [55, 52, 59, 63, 50]
]

var values_9 = [
  [12,14,16,18,11,13,15,17,19],
  [81,18,46,64,27,72,33,52,25],
  [146,130,70,66,204,111,323,99,269]
]

var values_25 = [
  [112, 33, 68, 189, 24, 46, 98, 50, 73, 213, 44, 18, 69, 57, 146, 82, 150, 102, 29, 120, 39, 66, 163, 120, 200 ],
  [44, 70, 67, 49, 55, 63, 35, 68, 74, 39, 50, 77, 61, 80, 40, 39, 42, 88, 57, 69, 96, 71, 85, 45, 55],
  [ 10, 80, 50 , 100, 22, 316, 23 , 8, 130, 111, 222, 66, 88, 30, 101, 99, 202, 14, 31, 13, 300, 16, 240, 56, 47 ]
]


var iteration = -1;

//// N rounds functions /////////////////////////////

function n3(){
  start = Date.now();
  background(0)
  iteration = iteration + 1

  if (iteration > 0) {
    next.remove();
  }

  if(iteration < 3){
  //creating buttons for an interation
  options_n3(iteration);
  
  }
  else {

    //Button to goto N5 round
  proceed = createButton("Proceed to next stage");

  proceed.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  iteration = -1
  proceed.mousePressed(n5) 

  }

}

function n5(){
  start = Date.now();
  background(0)
  iteration = iteration + 1

  if (iteration > 0) {
    next.remove();
  }

  if(iteration == 0) {
    proceed.remove();
  }

  if(iteration < 3){
  //Creating buttons for N5 round
  options_n5(iteration);
  
  }
  else {

  proceed = createButton("Proceed to next stage");

  proceed.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  iteration = -1
  proceed.mousePressed(n9) 

  }

}

function n9(){
  start = Date.now();
  background(0)
  iteration = iteration + 1

  if (iteration > 0) {
    next.remove();
  }

  if(iteration == 0) {
    proceed.remove();
  }

  if(iteration < 3){
  //Creating buttons for N5 round
  options_n9(iteration);
  
  }
  else {

  proceed = createButton("Proceed to next stage");

  proceed.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  iteration = -1
  proceed.mousePressed(n25) 

  }

}

function n25(){
  start = Date.now();
  background(0)
  iteration = iteration + 1

  if (iteration > 0) {
    next.remove();
  }

  if(iteration == 0) {
    proceed.remove();
  }

  if(iteration < 3){
  //Creating buttons for N5 round
  options_n25(iteration);
  
  }
  else {

  proceed = createButton("Proceed to next stage");

  proceed.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  iteration = -1
  proceed.mousePressed(n25) 

  }

}

/// Button generation for each round ///////////////

function options_n3(ind){

  var value1 = values_3[ind][0];
  var value2 = values_3[ind][1];
  var value3 = values_3[ind][2];


  button = createButton(value1);
  button.position(100, 250);
  button2 = createButton(value2);
  button2.position(200, 250);
  button3 = createButton(value3);
  button3.position(300, 250); 

  function correct() {
  var end = Date.now();
  var diff = end - start
  data[iteration] = diff
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  next.mousePressed(n3)
  
  } 
  //find out which button is the correct answer
  var small = smallestVal(value1,value2,value3);
  if (small == value1) {
 
    button.mousePressed(correct);
    button2.mousePressed(incorrect);
    button3.mousePressed(incorrect);
  }
  if (small == value2) {
 
    button.mousePressed(incorrect);
    button2.mousePressed(correct);
    button3.mousePressed(incorrect);
  }
  if (small == value3){
 
    button.mousePressed(incorrect);
    button2.mousePressed(incorrect);
    button3.mousePressed(correct);    
  }


}

function options_n5(ind){

  var value1 = values_5[ind][0];
  var value2 = values_5[ind][1];
  var value3 = values_5[ind][2];
  var value4 = values_5[ind][3];
  var value5 = values_5[ind][4];


  button = createButton(value1);
  button.position(50, 250);
  button2 = createButton(value2);
  button2.position(125, 250);
  button3 = createButton(value3);
  button3.position(200, 250);
  button4 = createButton(value4);
  button4.position(275, 250);  
  button5 = createButton(value5);
  button5.position(350, 250); 

  function correct() {
  var end = Date.now();
  var diff = end - start
  data[iteration + 3] = diff
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  button4.remove()
  button5.remove()
  next.mousePressed(n5)
  //next.mousePressed(round2)
  
  } 

  //Hard coding which is the right answer for now.
  /* for refecence
  var values_5 = [
  [9, 13, 80, 42, 33],
  [121, 21, 12, 212, 122],
  [55, 52, 59, 63, 50]
]
  */
  button.mousePressed(incorrect)
  button2.mousePressed(incorrect)
  button3.mousePressed(incorrect)
  button4.mousePressed(incorrect)
  button5.mousePressed(incorrect)

  if(iteration == 0){
    button.mousePressed(correct)
  }
  if(iteration == 1){
    button3.mousePressed(correct)
  }
  if(iteration == 2){
    button5.mousePressed(correct)
  }


}

function options_n9(ind){

  var value1 = values_9[ind][0];
  var value2 = values_9[ind][1];
  var value3 = values_9[ind][2];
  var value4 = values_9[ind][3];
  var value5 = values_9[ind][4];
  var value6 = values_9[ind][5];
  var value7 = values_9[ind][6];
  var value8 = values_9[ind][7];
  var value9 = values_9[ind][8];


  button = createButton(value1);
  button.position(100, 350);
  button2 = createButton(value2);
  button2.position(200, 350);
  button3 = createButton(value3);
  button3.position(300, 350); 

  button4 = createButton(value4);
  button4.position(100, 250);
  button5 = createButton(value5);
  button5.position(200, 250);
  button6 = createButton(value6);
  button6.position(300, 250);

  button7 = createButton(value7);
  button7.position(100, 150);
  button8 = createButton(value8);
  button8.position(200, 150);
  button9 = createButton(value9);
  button9.position(300, 150); 


 


  function correct() {
  var end = Date.now();
  var diff = end - start
  data[iteration + 3] = diff
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  button4.remove()
  button5.remove()
  button6.remove()
  button7.remove()
  button8.remove()
  button9.remove()
  next.mousePressed(n9)
  //next.mousePressed(round2)
  
  } 

  //Hard coding which is the right answer for now.
  /* for refecence
var values_9 = [
  [12,14,16,18,11,13,15,17,19],
  [81,18,46,64,27,72,33,52,25],
  [146,130,70,66,204,111,323,99,269]
]
]
  */

  button.mousePressed(incorrect)
  button2.mousePressed(incorrect)
  button3.mousePressed(incorrect)
  button4.mousePressed(incorrect)
  button5.mousePressed(incorrect)
  button6.mousePressed(incorrect)
  button7.mousePressed(incorrect)
  button8.mousePressed(incorrect)
  button9.mousePressed(incorrect)


  if(iteration == 0){
    button5.mousePressed(correct)
  }
  if(iteration == 1){
    button2.mousePressed(correct)
  }
  if(iteration == 2){
    button4.mousePressed(correct)
  }


}

function options_n25(ind){

  var value1 = values_25[ind][0];
  var value2 = values_25[ind][1];
  var value3 = values_25[ind][2];
  var value4 = values_25[ind][3];
  var value5 = values_25[ind][4];
  var value6 = values_25[ind][5];
  var value7 = values_25[ind][6];
  var value8 = values_25[ind][7];
  var value9 = values_25[ind][8];
  var value10 = values_25[ind][9];
  var value11 = values_25[ind][10];
  var value12 = values_25[ind][11];
  var value13 = values_25[ind][12];
  var value14 = values_25[ind][13];
  var value15 = values_25[ind][14];
  var value16 = values_25[ind][15];
  var value17 = values_25[ind][16];
  var value18 = values_25[ind][17];
  var value19 = values_25[ind][18];
  var value20 = values_25[ind][19];
  var value21 = values_25[ind][20];
  var value22 = values_25[ind][21];
  var value23 = values_25[ind][22];
  var value24 = values_25[ind][23];
  var value25 = values_25[ind][24];


  button = createButton(value1);
  button.position(50, 350);
  button2 = createButton(value2);
  button2.position(125, 350);
  button3 = createButton(value3);
  button3.position(200, 350);
  button4 = createButton(value4);
  button4.position(275, 350);  
  button5 = createButton(value5);
  button5.position(350, 350); 

  button6 = createButton(value6);
  button6.position(50, 275);
  button7 = createButton(value7);
  button7.position(125, 275);
  button8 = createButton(value8);
  button8.position(200, 275);
  button9 = createButton(value9);
  button9.position(275, 275);  
  button10 = createButton(value10);
  button10.position(350, 275); 

  button11 = createButton(value11);
  button11.position(50, 125);
  button12 = createButton(value12);
  button12.position(125, 125);
  button13 = createButton(value13);
  button13.position(200, 125);
  button14 = createButton(value14);
  button14.position(275, 125);  
  button15 = createButton(value15);
  button15.position(350, 125); 

  button16 = createButton(value16);
  button16.position(50, 50);
  button17 = createButton(value17);
  button17.position(125, 50);
  button18 = createButton(value18);
  button18.position(200, 50);
  button19 = createButton(value19);
  button19.position(275, 50);  
  button20 = createButton(value20);
  button20.position(350, 50); 

  button21 = createButton(value21);
  button21.position(50, 250);
  button22 = createButton(value22);
  button22.position(125, 250);
  button23 = createButton(value23);
  button23.position(200, 250);
  button24 = createButton(value24);
  button24.position(275, 250);  
  button25 = createButton(value25);
  button25.position(350, 250); 


 


  function correct() {
  var end = Date.now();
  var diff = end - start
  data[iteration + 3] = diff
  print("time: ")
  print(diff + "ms")
  background(0,128,0);
  next = createButton("Next round");

  next.position(20,100);
  button.remove()
  button2.remove()
  button3.remove()
  button4.remove()
  button5.remove()
  button6.remove()
  button7.remove()
  button8.remove()
  button9.remove()
  button10.remove()
  button11.remove()
  button12.remove()
  button13.remove()
  button14.remove()
  button15.remove()
  button16.remove()
  button17.remove()
  button18.remove()
  button19.remove()
  button20.remove()
  button21.remove()
  button22.remove()
  button23.remove()
  button24.remove()
  button25.remove()
  next.mousePressed(n25)
  //next.mousePressed(round2)
  
  } 

  //Hard coding which is the right answer for now.
  /* for refecence
var values_25 = [
  [112, 33, 68, 189, 24, 46, 98, 50, 73, 213, 44, 18, 69, 57, 146, 82, 150, 102, 29, 120, 39, 66, 163, 120, 200 ]
  ,
  [44, 70, 67, 49, 55, 63, 35, 68, 74, 39, 50, 77, 61, 80, 40, 39, 42, 88, 57, 69, 96, 71, 85, 45, 55]
  ,
  [ 10, 80, 50 , 100, 22, 316, 23 , 8, 130, 111, 222, 66, 88, 30, 101, 99, 202, 14, 31, 13, 300, 16, 240, 56, 47 ]
]
  */

  button.mousePressed(incorrect)
  button2.mousePressed(incorrect)
  button3.mousePressed(incorrect)
  button4.mousePressed(incorrect)
  button5.mousePressed(incorrect)
  button6.mousePressed(incorrect)
  button7.mousePressed(incorrect)
  button8.mousePressed(incorrect)
  button9.mousePressed(incorrect)
  button10.mousePressed(incorrect)
  button11.mousePressed(incorrect)
  button12.mousePressed(incorrect)
  button13.mousePressed(incorrect)
  button14.mousePressed(incorrect)
  button15.mousePressed(incorrect)
  button16.mousePressed(incorrect)
  button17.mousePressed(incorrect)
  button18.mousePressed(incorrect)
  button19.mousePressed(incorrect)
  button20.mousePressed(incorrect)
  button21.mousePressed(incorrect)
  button22.mousePressed(incorrect)
  button23.mousePressed(incorrect)
  button24.mousePressed(incorrect)
  button25.mousePressed(incorrect)



  if(iteration == 0){
    button12.mousePressed(correct)
  }
  if(iteration == 1){
    button7.mousePressed(correct)
  }
  if(iteration == 2){
    button8.mousePressed(correct)
  }


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
  button.mousePressed(incorrect2);
  button2.mousePressed(incorrect2);
  button3.mousePressed(correct);
  
}

function incorrect(){
  background(255,0,0);
}

function incorrect2(){
  print("wrong!");
}

function smallestVal(a,b,c){
  
  if (a < b ) {
    if (a < c) {
      print(a)
      return a;
    }
    else {
      print(c)
      return c;
    }
  }
  else{
    if( b < c ) {
      print(b)
      return b;
    }
    else {
      print(c)
      return c;
    }
  }
  
}