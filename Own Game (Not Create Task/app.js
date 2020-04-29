let treeImg
let heading
let acornImg

let moneyDisplay
let livesDisplay

let lives = 3
let money = 0

function setup() {
  

  moneyDisplay = createElement('h4', 'Money: ' + money + "$")
  moneyDisplay.position(width / 4, height / 14)
  
  createCanvas(windowWidth, windowHeight);
  background(500,500,500)
  treeImg = createImg('tree.png', 'tree image');
  treeImg.size(700, 700);
  acornImg = createImg('acorn.png', 'acorn image');
  acornImg.size(175, 110);
  frameRate(1.5)
}

function draw(){
    
   treeImg.position(width / 8, height / 4)
   acornImg.position(random(250,700), random(200,350))
   acornImg.mousePressed(changeSpot)
   
}

function changeSpot(){
  
    money = money + 1
    console.log("Money: " + money)
    moneyDisplay.html("Money: " + money + "$")
    
}