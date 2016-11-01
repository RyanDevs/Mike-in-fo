function setup() {

  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {
  background(0);
 var vol = mic.getLevel();
 var ran = Math.floor(Math.random()*20);
 var ran1 = Math.floor(Math.random()*20);
 stroke(240);
 line(100,300,100,vol*100+150);
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
 stroke(220,20,60);
 line(300,300,0,300);

}
