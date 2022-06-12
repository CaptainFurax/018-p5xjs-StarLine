p5.disableFriendlyErrors = true;
function setup()
{
  frameRate( 30 );
  angleMode( DEGREES );
  pixelDensity( 1 );
  z = 400;
  a = [ 
        {x:0, y:-z/2},
        {x:z/2, y:0},
        {x:0, y:z/2},
        {x:-z/2, y:0}
      ];
  createCanvas( z ,z );
}

function draw()
{
  background(0);
  push();
    translate(z/2,z/2)
    StarLine();
  pop();
}

function StarLine()
{
  stroke( [ 255, 127, 63 ] );
  strokeWeight( 1 );
  for( var s = 0; s < z/2; s += 20 ) {
    line( a[0].x, a[0].y + s, a[0].x + s, a[1].y );
    line( a[1].x -s, a[1].y, a[0].x, a[1].y + s );
    line( a[2].x, a[2].y - s, a[2].x - s, a[3].y );
    line( a[3].x + s, a[3].y, a[0].x, a[3].y-s );
  }
}