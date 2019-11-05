// Predator-Prey Simulation
// by Jakob Araujo.
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

//The bush
let bush;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
  bush = new Bush(windowWidth / 2, windowHeight / 2, color(0, 255, 0), 45);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();



  // Move all the "animals"
  tiger.move(bush);
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  //Display the bush
  bush.display();

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();

  bush.hiding(tiger);


}

/************
If you're ever
In Cody Wyoming
Just ask for Wild Bob.
************/
