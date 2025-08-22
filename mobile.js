import { createDiv, createBtn } from "./utils.js";
import { moveBlock, rotateBlock, holdBlock } from "./main.js";

let test = document.querySelector('#deviceTest');
let ua = window.navigator.userAgent;
let device = ua.split('(')[1].split(';')[0].toLowerCase();
let newContent = document.createTextNode(device);
test.appendChild(newContent);

const mobileList = ["iphone", "ipad"];

let buttonBox = createDiv("button-box");
let leftBtnBox = createDiv("left-btn");
let rightBtnBox = createDiv("right-btn");

if(mobileList.includes(device)) {
  buttonBox.appendChild(leftBtnBox);
  buttonBox.appendChild(rightBtnBox);

  for(let i = 0; i < 2; i++ ) {
    for(let j = 0; j < 4; j++) {
      let controlBtn = createBtn("control-btn");
      buttonBox.children[i].appendChild(controlBtn);
    }
  }
  document.body.insertAdjacentElement("beforeend", buttonBox);
}

let leftBtn = document.querySelectorAll(".control-btn")[2];
leftBtn.appendChild(document.createElement('img'));
leftBtn.firstElementChild.setAttribute('src', './img/LeftMove.png');
leftBtn.onclick = () => moveBlock('left');

let rightBtn = document.querySelectorAll(".control-btn")[7];
rightBtn.appendChild(document.createElement('img'));
rightBtn.firstElementChild.setAttribute('src', './img/RightMove.png');
rightBtn.onclick = () => moveBlock("right");

//let leftRotateBtn = document.querySelectorAll(".control-btn")[0];
//leftRotateBtn.onclick = () => moveBlock('left');

let rightRotateBtn = document.querySelectorAll(".control-btn")[5];
rightRotateBtn.appendChild(document.createElement('img'));
rightRotateBtn.firstElementChild.setAttribute('src', './img/RightRotate.png');
rightRotateBtn.onclick = () => rotateBlock();

let downBtn = document.querySelectorAll(".control-btn")[6];
downBtn.appendChild(document.createElement('img'));
downBtn.firstElementChild.setAttribute('src', './img/SoftDrop.png');
downBtn.onclick = () => moveBlock('down');

let holdBtn = document.querySelectorAll(".control-btn")[1];
holdBtn.appendChild(document.createElement('img'));
holdBtn.firstElementChild.setAttribute('src', './img/Hold.png');
holdBtn.onclick = () => holdBlock();

//let leftBtn = document.querySelectorAll(".control-btn")[2];
//leftBtn.onclick = () => moveBlock('left');

//let rightBtn = document.querySelectorAll(".control-btn")[7];
//rightBtn.onclick = () => moveBlock('right');