function setup(){
    button=createButton('Restart')
   
    button.mousePressed(goToLink)
    button.style('font-size: 50px')
    button.style('background-color: red')
    button.style('width: 200px')
    button.style('height: 100px')
    button.position(windowWidth / 2.25, windowHeight / 1.25)
}

function goToLink() {
  window.location.href = 'start.html'
}
