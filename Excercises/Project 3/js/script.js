"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let playerX = 69;
let playerY
let playerR = 69;
let playerS = 5;
//let playerV = 5;

let enemyS;
let enemyV;

let playerChar;

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth, windowHeight);
playerY = windowHeight / 2;


playerChar = new Player (playerS, playerX, playerY, playerR);
}


// draw()
//
// Description of draw()

function draw() {
  background (0);


  playerChar.movement();
  playerChar.display();
  playerChar.screenWrap();


}
