import { createDiv, createBtn } from "./utils.js";
import { moveBlock } from "./main.js";

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
leftBtn.onclick = () => moveBlock('left');
let rightBtn = document.querySelectorAll(".control-btn")[7];
rightBtn.onclick = () => moveBlock('right');