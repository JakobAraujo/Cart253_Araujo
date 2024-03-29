/******************************************************

Game - The Artful Dodger
Pippin Barr

A simple dodging game with keyboard controls

******************************************************/

// The position and size of our avatar circle
let avatarX;
let avatarY;
let avatarSize = 50;

// The speed and velocity of our avatar circle
let avatarSpeed = 10;
let avatarVX = 0;
let avatarVY = 0;

// The position and size of the enemy circle
let enemyX;
let enemyY;
let enemySize = 50;

// The speed and velocity of our enemy circle
let enemySpeed = 5;
let enemyVX = 5;

// How many dodges the player has made
let dodges = 0;


//The Red value of the background
let backGroundR = 255;

//The Blue value of the background
let backgroundB = 220;

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A pink background
  background(backGroundR,220,backgroundB);
  
  fill(255, 255, 0);
  
  //Font of the text
  textFont('Georgia');
  
  //Dictates the size of the score text
  textSize(25)
  
  //Displays the number of doges the player has preformed
  text(dodges, 250, 50, 50, 50);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
    //Resets enemy size and speed to default.
    enemySize = 50;
    enemySpeed = 5;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
    
    //Resets enemy size and speed to default.
    enemySize = 50;
    enemySpeed = 5;
    
    
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
  }

   
  // Display the number of successful dodges in the console
  console.log(dodges);
  
  
  //Increases enemy's speed and size in proportion to the dodges
  enemySpeed = enemySpeed + dodges;
  enemySize = enemySize + dodges
  
  //Regulates speed of the enemy
  if(enemySpeed >= 25){
   enemySpeed = 25 
  }
  if(enemySize >= 80){
   enemySize = 80 
  }
  
  //Changes background colour (RED) based on Player's Y position
  if(avatarY < 250){
   backGroundR = backGroundR - 5 

  }
  
  if(avatarY > 250){
   backGroundR = backGroundR + 5

  }
  
  //Changes background colour (BLUE) based on Player's X position
  if(avatarX < 250){
   backgroundB = backgroundB - 5

  }
  
  if(avatarX > 250){
   backgroundB = backgroundB + 5 

  }


  
  
  // The player is green
  fill(0, 255, 0);
  // Draw the player as a circle
  ellipse(avatarX,avatarY,avatarSize,avatarSize);

  // The enemy is purple
  fill(50,0,50);
  // Draw the enemy as a rectangle 
  rect(enemyX,enemyY,enemySize,enemySize);
  
}