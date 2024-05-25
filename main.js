import { rollLines } from "./db";
async function main (){
  const loadScreenEl = document.querySelector('.loader');
  const welcomeEl = document.querySelector('.welcome-screen');
  const totalNumberInput = document.querySelector('input#last-roll');
  const playEl = welcomeEl.querySelector('.play-button');
  const app = document.querySelector('.app');
  const rollEl = app.querySelector('.roll-number');
  const rollLineEl = app.querySelector('.roll-line');
  const homeBtn = app.querySelector('.home-button');

  let lastRoll = localStorage.getItem("random-roll-totalNumber") || 31;
  totalNumberInput.value = lastRoll;
  let rollJustNow = 0;

  totalNumberInput.addEventListener('change', (event)=>{
    let selectedNumber = event.target.value;
    if (selectedNumber > 40 || selectedNumber < 1){
      alert('Total number can only be between 1 and 40');
      selectedNumber = 31;
      totalNumberInput.value = 31;
    }

    localStorage.setItem("random-roll-totalNumber", selectedNumber);
    lastRoll = selectedNumber;
  });
  

  homeBtn.addEventListener('click',(e)=>{
    welcomeEl.style.display = 'flex';
    e.stopPropagation();
  })


  function generateAndShow(){
    let randomNumber;
    while (true) {
      randomNumber = Math.floor(Math.random() * (lastRoll- 1));
      if(randomNumber !== rollJustNow) break;
    }
    rollJustNow = randomNumber
    rollEl.innerText = randomNumber +1;
    rollLineEl.innerText = rollLines[randomNumber];

    if(welcomeEl.style.display !== 'none'){
      welcomeEl.style.display = "none";
    }
    loadScreenEl.style.display = 'flex';
    setTimeout(()=>{
      loadScreenEl.style.display = 'none';
    },500)
  }

  playEl.addEventListener('click', generateAndShow);
  app.addEventListener('click', generateAndShow);
  
}

document.addEventListener('DOMContentLoaded', main);