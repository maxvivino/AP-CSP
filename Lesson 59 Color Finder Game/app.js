/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
let currentPlayer = 1
let randButtonId = 1
let p1Score = 0
let p2Score = 0

// Get UI Elements
const p1ScoreDisplay = select('#score1')
const p2ScoreDisplay = select('#score2')
const button1 = select('#button1')
const button2 = select('#button2')
const button3 = select('#button3')
const button4 = select('#button4')

setBoard()
function setBoard() {

    function checkCorrect(buttonId){
      console.log(`checking: ${buttonId}`)
      if(buttonId == randButtonId ) {
        console.log("You got it right!")
        updateScoreBy(1)
    } else {
        console.log("WRONG")
        updateScoreBy(-3)
    }
      setBoard()
      switchPlayer()
    }

    function updateScoreBy(amt) {
    if (currentPlayer === 1){
      p1Score += amt
    } else {
      p2Score += amt
    }
    console.log(`P1 score: ${p1Score}`)
    console.log(`P2 score: ${p2Score}`)
    p1ScoreDisplay.html(p1Score)
    p2ScoreDisplay.html(p2Score)
  }
    
  
         
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
    randButtonId = `button${Math.floor(random(1,4))}`
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
function switchPlayer() {
      if (currentPlayer === 1) {
        currentPlayer = 2
        select('#player1').style('filter', 'opacity(20%)')
        select('#player2').style('filter', 'opacity(100%)')
      } else {
        currentPlayer = 1
        select('#player1').style('filter', 'opacity(100%)')
        select('#player2').style('filter', 'opacity(20%)')
      }
      console.log(`current player: ${currentPlayer}`)
    }

    function checkP1Win(){
      if(p1Score > 9){
        window.location.href = 'P1win.html' 
      }
      function checkP2Win(){
        if(p2Score > 9){
          window.location.href = 'P2win.html' 

        }
      
    }
  }
}








