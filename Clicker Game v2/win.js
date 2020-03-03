function setup(){
  createCanvas(windowHeight,windowWidth)
  background(100,100,500)
    const heading = createElement('h1', 'You Won!!!')
    heading.style('font-family: roboto')
    heading.style('font-size: 50px')
    heading.style('text-align: center')
    heading.style('position: absolute')
    heading.style('width: 100%')
    heading.style('top: 100px')

    trophyImg = createImg('Trophy.png', 'trophy image');
    trophyImg.size(300, 400);
    trophyImg.position(windowWidth / 2.4, windowHeight / 3.5)
    button=createButton('Play Again')
   
    button.mousePressed(goToLink)
    button.style('font-size: 50px')
    button.style('background-color: red')
    button.style('width: 200px')
    button.style('height: 150px')
    button.position(windowWidth / 2.25, windowHeight / 1.25)
}

function goToLink() {
  window.location.href = 'start.html'
}




