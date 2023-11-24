const $enforce = document.querySelector('.enforce-button');
const $pray = document.querySelector('.pray-button');
const $status = document.querySelector('.status-img');

const $cost = document.querySelector('#enforce_cost');
const $prob = document.querySelector('#enforce_prob');
const $level = document.querySelector('#level');
const $money = document.querySelector('#money');

const $character = document.querySelector('.game-img');
const $logo = document.querySelector('.logo');


let stage = 1;
let level = 1;
let prob = 100;
let cost = 100;
let money = 50000;
let pray = 0;

$character.src = `./src/img/${stage}.jpg`;

const setting = () => {
  $cost.innerHTML = `${cost}원`;
  $prob.innerHTML = `${prob + pray}%`;
  $level.innerHTML = `${level}LV`
  $money.innerHTML = `${money}원`
}

const canEnfore = () => {
  return money >= cost;
}

const stageUp = () => {
  level = 1;
  stage++;
  $character.src = `./src/img/${stage}.jpg`;
}

const init = () => {
  money += Math.round(Math.random() * 50000);
}


// main

init();
setting();

$enforce.addEventListener('click', () => {
  if (canEnfore()) {
    money -= cost;
    setting();
  }
  else {
    return;
  }
  if (Math.random() * 100 < prob + pray) {
    if (level < 10) {
      prob--;
      level++;
      money -= cost;
      cost += 100;
      pray = 0;
      setting();
    } else {
      stageUp();
      setting();
    }

  }
})

$pray.addEventListener('click', () => {
  if (prob + pray < 100) {
    pray++;
    setting();
  }
})

$logo.addEventListener('click', () => {
  money += 100000;
  setting();
})