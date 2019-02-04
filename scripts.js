// Interactivity demo 1
console.log("testing that this works")

// Invert
var invertButton = document.querySelector("button")
var bodyClass = document.body.classList

invertButton.addEventListener("click", changeColour)

function changeColour() {
console.log ("Testing the colour change")

if (bodyClass.contains("invert") ) {
	bodyClass.remove("invert")
}

else {
	bodyClass.add("invert")

}

}

//emoji
var hand = document.querySelector(".waving-hand")
var greeting = document.querySelector(".greeting")

var emojis = ['&#128516;', '&#128515;', '&#128528;', '&#128577;', '&#128530;', '&#128545;']
var phrases = ['Hi there', 'Hello?', 'Can I help you?', 'What do you want?', 'Stop that!', 'Go away!']
var counter = 0


hand.addEventListener("click", sayHello)

function sayHello() {
	if (counter < emojis.length) {
		greeting.textContent = phrases[counter]
		hand.innerHTML = emojis[counter]
		counter++
	}
}


// grimace

var counter2 = 0;
var srcArray = ["images/grimace1.jpg", "images/grimace2.jpg", "images/grimace3.jpg", "images/grimace4.jpg"];

prev.onclick = function(){
    blur()
    setTimeout( function() {
        if (counter2 == 0) {
            counter2 = srcArray.length - 1 
        } else {
         counter2--;
        }
        document.getElementById("currentImage").src = srcArray[counter2];

    }, 1000)
}

next.onclick = function(){
    blur()
    setTimeout(function() {
        if (counter2 >= srcArray.length -1) {
             counter2 = 0;
         } else {
            counter2++;
        }
        document.getElementById("currentImage").src = srcArray[counter2];
        
           
    }, 1000)

}


function blur() {
    var images = document.querySelector('.images')
    images.id = 'blur'

    setTimeout(function() {
        images.id = ''
    }, 1000)
}







