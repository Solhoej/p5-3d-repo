let right = false;
let left = false;
let posX = 0;
let posY = 150;
let posZ = 400;
let Speed = 15;
let sphereTexture;
let spheres = [];
let healthPoints = 3;
let healthLoss = true;
let respawnX = 77;
let respawnY = 382;
let respawnWidth = 458;
let respawnHeight = 58;
let respawnButton = false;

import { Sphere } from './sphere.js';

function preload() {
  wallTexture = loadImage('assets/stone.jpg');
  sphereTexture = loadImage('assets/bigpurpleball.png');
  deathMessage = loadImage('assets/minecraftded.png');
  floorTexture = loadImage('assets/grass.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < 1; i++) {
    spheres.push(new Sphere(0, 150, -100));
  }
}

function draw() {
  background(225);
  noStroke();
  Movement();

  PlaneGenerator(90, 0, 90, -200, floorTexture);
  PlaneGenerator(-90, 0, 90, -200, wallTexture);
  PlaneGenerator(0, 90, 0, -200, wallTexture);
  PlaneGenerator(0, -90, 0, -200, wallTexture);
  PlaneGenerator(0, 0, -90, -200, wallTexture);

  if (posX < -170)
    posX = -170;
  if (posX > 170)
    posX = 170;

  if (healthPoints == 0) {
    ResetGame();
  } else {
    SphereCode();
  }

  console.log(healthPoints);
}

// Koden der styrer funktionen, der laver kuglerne
function SphereCode() {
  for (let sphere of spheres) {
    sphere.update(posX, posZ);
    sphere.display(sphereTexture);

    let sphereXPos = sphere.xPos;
    let sphereZPos = sphere.rapidlyApproachingZ;
    score = sphere.sphereScore;
    // console.log('posX: ' + posX);
    // console.log('posZ: ' + posZ);
    // console.log('sphereXPos: ' + sphereXPos);
    // console.log('sphereZPos: ' + sphereZPos);
     if (dist(posX, posZ, sphereXPos, sphereZPos) < 10 && healthLoss) {
      healthPoints -= 1;
      healthLoss = false;
    } else {
      healthLoss = true;
    }
  }
}

// Kode der bliver aktivt når healthPoints når 0, som styrer respawn
function ResetGame() {
  posY = 100;
  posX = 0;
  respawnButton = true;

  push();
  texture(deathMessage);
  rectMode(CENTER,CENTER);
  translate(0, 140, 70);
  plane(width/2, height/2);
  pop();
}

function mousePressed() {
  if (
    mouseX > respawnX &&
    mouseX < respawnX + respawnWidth &&
    mouseY > respawnY &&
    mouseY < respawnY + respawnHeight &&
    respawnButton == true
  ) {
    posY = 150;
    respawnButton = false;
    healthPoints = 3;
    sphere.respawn();
  }
}

function PlaneGenerator(xRotation, yRotation, zRotation, positionZ, textures) {
  push();
  rotateX(xRotation);
  rotateY(yRotation);
  rotateZ(zRotation);
  translate(0, 0, positionZ);
  texture(textures);
  plane(850, 400);
  pop();
}

function keyPressed() {
  if (key == 'a') {
    left = true;
  }
  if (key == 'd') {
    right = true;
  }
}

function keyReleased() {
  if (key == 'a') {
    left = false;
  }
  if (key == 'd') {
    right = false;
  }
}

// Styrer bevægelse med hjælp af de to ovenstående funktioner
function Movement() {
  /*posX skrives ind både ved kamera position og ved kamerarets synsvinkel på x aksen
  for, at undgå at kamereraet kigger på position 0,0,0 i midten af canvas. Ens er det med de resterende positioner.
  Der bliver trukket 100 fra posZ orientationen for at undgå at kamereat kigger væk fra spilleområdet*/
  camera(posX, posY, posZ, posX, posY, posZ - 100); 

  if (right) {
    posX += Speed * cos(0);
    posZ += Speed * sin(0);
  }
  if (left) {
    posX -= Speed * cos(0);
    posZ -= Speed * sin(0);
  }
}