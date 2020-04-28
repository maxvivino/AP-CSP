let treeImg
let heading
let acornImg

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(500,500,500)
  treeImg = createImg('tree.png', 'tree image');
  treeImg.size(700, 700);
  acornImg = createImg('acorn.png', 'acorn image');
  acornImg.size(175, 110);
  frameRate(2)
}

function draw(){
   treeImg.position(width / 8, height / 4)
   acornImg.position(width / 4, height /  4)
  
   acornImg.mousePressed(changeSpot)
     
}

function changeSpot(){
    acornImg.remove()
    console.log("Acorn has been clicked ")
    
}