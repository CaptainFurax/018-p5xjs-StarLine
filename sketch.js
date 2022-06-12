p5.disableFriendlyErrors = true;
function setup() {
  frameRate(30);
  angleMode(DEGREES);
  pixelDensity(1);
  z = 400;
  createCanvas(z,z);
  a = [ {x:0,y:-z/2},{x:z/2,y:0}, {x:0, y:z/2}, {x:-z/2, y:0} ];
}

function draw() {
  background(0);
  push();
    translate(z/2,z/2)
    rotate(frameCount/2);
    Quarter();
  pop();
}

function Quarter()
{
  stroke([191,201,202,255]);
  strokeWeight(1);
  for( var s = 0; s < z/2; s += 20 ) {
    line( a[0].x, a[0].y + s, a[0].x + s, a[1].y );
    line( a[1].x -s, a[1].y, a[0].x, a[1].y + s );
    line( a[2].x, a[2].y - s, a[2].x - s, a[3].y );
    line( a[3].x + s, a[3].y, a[0].x, a[3].y-s );
  }
}