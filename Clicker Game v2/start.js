let button

function setup(){
  createCanvas(windowHeight,windowWidth)
  background(100,100,500)
  //Main text
  const heading = createElement('h1', 'Welcome to Banana Clicker!')
  heading.style('font-family: roboto')
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')
  //button
  button=createButton('Start Game')
  button.position('text-align: center')
 button.style('position: absolute')
  button.mousePressed(goToLink)
  button.style('background-color: red')
  button.style('width: 100px')
  button.style('height: 50px')

}

function goToLink() {
  window.location.href = 'game.html'
}