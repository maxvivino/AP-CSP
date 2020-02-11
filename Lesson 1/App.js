
// function setup() {
//     createCanvas(windowHeight, windowWidth)
//     background('lightGray')

    
//     createP('This was created in Javascript!')

    //LUCKY NUMBERS
// function setup() { 
//     createCanvas(400, 400);
//     background(220)
//     createElement('h1', 'my lucky numbers below');
//     createElement('p', 'my lucky number is 34');
//   } 
//   function draw() { 
//     background(220);
//   } 

    // CREATE HTML WITH CREATEELEMENT WITH IDs
//   function setup() { 
//     createCanvas(400, 400);
//     background(220)
//     createElement('h1', 'my lucky numbers below');
//    let numText = createElement('p', '34');
//     console.log(numText)   Find out what is inside of this newly created numText objects

//   } 
//   function draw() { 
//     background(220);
//   } 

    // WHEN CLICKED SHOW RANDOM NUMBER 1-10
// function setup() { 
// createCanvas(400, 400);

// }

// function mousePressed(){
//     createP("My lucky number is" + random(1,10))
// }

// function draw() {
//     background(220)
// }

    //Button Clicks

let button
let greeting
function setup() {
    createCanvas(windowWidth, windowHeight)
    button = createButton('Try Me');
    button.position(width / 2, height / 2)
    button.mousePressed(greet)
    greeting = createElement('h2', 'Say Hello!')
    greeting.position(width / 2, height / 3)
    textAlign(CENTER)
    textSize(50)
}
function greet() {
    greeting.html('HELLO!')
    for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), random(255),random(255));
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('HELLO', 0, 0);
    pop();
    }
}