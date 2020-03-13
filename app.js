/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */



function setup() {
    let randButtonId
    function checkCorrect (buttonId) {
        console.log(`checking: ${buttonId}`)
        setBoard()
    }
    
        setBoard()
    function setBoard() {
    let randButtonId = 1
    let currentPlayer = 1
    let p1Score = 0
    let p2Score = 0
  
    // Get UI Elements
    const p1ScoreDisplay = select('#score1')
    const p2ScoreDisplay = select('#score2')
    const button1 = select('#button1')
    const button2 = select('#button2')
    const button3 = select('#button3')
    const button4 = select('#button4')
    //chooses random color
    let R = random(0,255)
    let G = random(0,255)
    let B = random(0,255)
    
    let color= `RGB(${R}, ${G}, ${B})`
    //makes different color 20 pixels different
    G += 20
    B += 20
    R += 20
    let diffColor = `RGB(${R}, ${G}, ${B})`
   
    //puts color to the buttons
    button1.style('background-color', color)
    button2.style('background-color', color)
    button3.style('background-color', color)
    button4.style('background-color', color) 
    //Randomizes where the different color button is
    randButtonId = `button${Math.floor(random(1,5))}`
    select(`#${randButtonId}`).style('background-color', diffColor)

    console.log(`correct button is: ${randButtonId}`)
    
    button1.mousePressed(function () {
        checkCorrect('button1')
      })

    button2.mousePressed(function () {
        checkCorrect('button2')
      })

    button3.mousePressed(function () {
        checkCorrect('button3')
      })
    
    button4.mousePressed(function () {
        checkCorrect('button4')
      })

  }
}