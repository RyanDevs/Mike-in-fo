/*! Mike in fo! v0.1.1 October 30, 2016 By Ryan*/
function setup(){
	createCanvas(800, 600);
	mic = new p5.AudioIn();
 	mic.start();
}

function draw(){

	var x = 200;

	background(0);
	stroke(200);
	//var p = line(300,300,mouseX,mouseY);

	var vol = mic.getLevel();
 var ran = Math.floor(Math.random()*20);
 var ran1 = Math.floor(Math.random()*20);
 

 stroke(240);
 line(100,300,100,vol*200+150);

 stroke(0,240,0);
 line(110,300,110,vol*200+150);
 
 stroke(0,0,240);
 line(90,300,90,vol*200+150);
 
 stroke(0,240,240);
 line(80,300,80,vol*200+150);
 
 stroke(240,0,240);
 line(120,300,120,vol*200+150);
 
 stroke(240,240);
 line(130,300,130,vol*200+150);

 
 //RED BOTTOM LINE
 stroke(220,20,60);
 line(500,300,0,300);


 	// X and Y Coords
 	stroke(200);
	fill(200);
	text("X: " + mouseX +" Y: "+mouseY,520+x,580,599+x,580);
	stroke(200,100,100);
	fill(200,100,100);
	text("VOL:"+ vol,0,580,599,580);
	//GREEN LINE
	stroke(0,222,60);
	line(515+x,593,599+x,593);

	if(vol > 0.001){
		stroke(0,200,0);
		text("[NOICE]",0,300,599,580);
	}

	stroke(240,0,0);
	line(240,298,240,144);
	stroke(240);
	fill(0);

	ellipse(360,200,vol*300,vol*300);
	stroke(10,200,200);
	fill(10,200,200);
	text("VOL*300: "+vol*300,320,311);

	

	}