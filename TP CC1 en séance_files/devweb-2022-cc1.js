"use strict";

const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  $output.textContent = ""
  $output.appendChild(document.createTextNode("Start ...! ---> "));
  $guessBtn.removeAttribute("disabled");
  $guessBtn.addEventListener("click", Game);
}

function Game() {
  var txt = ""
  maxGuesses -= 1
  if ($numUsr.value == secretNumber) {
    txt = "Gagner !!!!!";
    $guessBtn.setAttribute('disabled',"")
  } else {
    if ($numUsr.value > secretNumber){
      txt = "NB chances : "+maxGuesses+" |  < Le nombre secret est plus petit..."
    } else {
      txt = "NB chances : "+maxGuesses+" |  > Le nombre secret est plus grand..."
    };
  if (maxGuesses <= 0) {
    txt = "Perdu :( | Le nombre secret est :"+secretNumber
    $guessBtn.setAttribute('disabled',"")
  };
  };
  $output.textContent = txt
  console.log(undefined)
}

$startBtn.addEventListener("click", launchGame);
$numUsr.addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    $guessBtn.click()
    console.log("click")
  };
})

// Functions Exercice addCow //

const b = document.body;

function addCow(evt) {
  console.log(evt.x, evt.y);
  let element = document.createElement('img');
  let randomint = Math.random();
  element.setAttribute("src",'https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg');
  element.className = 'cow';
  element.style.setProperty('top',evt.pageY+'px');
  element.style.setProperty('left',evt.pageX+'px');
  element.style.setProperty("transform",'rotate('+randomint+"turn)");
  b.append(element);
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);