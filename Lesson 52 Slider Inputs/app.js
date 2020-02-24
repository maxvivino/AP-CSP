// Challenge
// let x = 2
// let y = 3

// y = y + x 

// console.log("the value of y is: " + y + " (y should be 5) ");
let color;
let saturation;
let brightness;
let textInput

function setup() {
    color = createSlider(0, 360, 100);
    saturation = createSlider(0, 100, 100);
    brightness = createSlider(0, 100, 100);
    textInput = createInput("hello")
    createCanvas(600, 120);
    colorMode(HSB); 

}

function draw() {
    background(color.value(), saturation.value(), brightness.value());

    textSize(80);
    text(textInput.value(), 210, 100);
}

