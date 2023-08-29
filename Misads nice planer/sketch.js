x0 = 1;
y0 = 1;
z0 = 1;
x1 = 1;
y1 = 1;
z1 = 1;
x2 = 1;
y2 = 1;
z2 = 1;
s1 = 1;
s2 = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  if (keyIsDown(RIGHT_ARROW)) {
    s1++;
    console.log("s1: "+s1+ " s2: "+s2);
  }
  if (keyIsDown(LEFT_ARROW)) {
    s1--;
    console.log("s1: "+s1+ " s2: "+s2);
  }
  if (keyIsDown(UP_ARROW)) {
    s2++;
    console.log("s1: "+s1+ " s2: "+s2);
  }
  if (keyIsDown(DOWN_ARROW)) {
    s2--;
    console.log("s1: "+s1+ " s2: "+s2);
  }

  let x = x0 + s1 * (x1 - x0) + s2 * (x2 - x0);
  let y = y0 + s1 * (y1 - y0) + s2 * (y2 - y0);
  let z = z0 + s1 * (z1 - z0) + s2 * (z2 - z0);

  translate(x,y,z);
  sphere(10);
}

function NicePlan(x,y,z) {

  translate(x,y,z);
  sphere(10);
  
}