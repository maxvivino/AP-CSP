// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5



function setup() {
  // Setup Canvas
createCanvas(windowWidth, windowHeight)
background(100,100,500)

bananaImg = createImg('banana.png', 'banana image');
bananaImg.size(200, 100);
  // Setup Lives and  Score Display
  livesDisplay = createElement('h4', 'Lives: ' + lives)
  livesDisplay.position(width / 3, height / 14)

  scoreDisplay = createElement('h4', 'Score: ' + score)
  scoreDisplay.position(width / 4, height / 14)
  


  // Creates Difficulty Slider
const difficultyLabel = createElement('h4', 'DIFFICULTY')
difficultyLabel.position(width/20, height/14)
difficultySlider = createSlider(0, 7, 1);
difficultySlider.position(width/8.5, height/10.25)


  
  
}

function draw() {
  // Adjust frameRate according to slider
  
    frameRate(difficultySlider.value()) 
  

  // Randomly Position bananaImg.position(random(width),random(height))
    bananaImg.position(random(width), random(height))

  
  

}

function mousePressed() {
  bananaImg.mousePressed(increaseScore)
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
  score =  score + 1
  console.log("Score: " + score)
  scoreDisplay.html("Score: " + score)
  checkWin()
  checkLose()
}

function decreaseLives() {
lives =  lives - 1
console.log("Lives: " + lives)
livesDisplay.html("Lives: " + lives)
checkWin()
checkLose()
}

function checkWin() {
if(score > 4) {
  window.location.href = 'win.html' 
}

}

function checkLose() {
if(lives == 0){
  window.location.href = 'lose.html'
}
}