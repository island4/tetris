import { createDiv } from "./utils";

let test = document.querySelector('#deviceTest');
let ua = window.navigator.userAgent;
let device = ua.split('(')[1].split(';')[0].toLowerCase();
let newContent = document.createTextNode(device);
test.appendChild(newContent);

const mobileList = ["iphone", "ipad"];

let buttonBox = createDiv("button-box");
let leftBtn = createDiv("left-btn");
let rightBtn = createDiv("right-btn");
let controlBtn = createDiv("control-btn");

if(mobileList.includes(device)) {
    buttonBox.appendChild(leftBtn);
    buttonBox.appendChild(rightBtn);

    for(let i = 0; i < 2; i++ ) {
        for(let j = 0; j < 4; i++) {
            buttonBox.children[i].appendChild(controlBtn);
            buttonBox.children[i].children[j].createTextNode(i*j);
        }
    }

    
}
document.body.insertAdjacentElement("beforeend", buttonBox);
/*
    <div class="box" id="button-box">
      <div class="box" id="left-btn">
        <button class="control-btn">1</button>
        <button class="control-btn">2</button>
        <button class="control-btn">3</button>
        <button class="control-btn">4</button>
      </div>
      <div class="box" id="right-btn">
        <button class="control-btn">5</button>
        <button class="control-btn">6</button>
        <button class="control-btn">7</button>
        <button class="control-btn">8</button>
      </div>
    </div>
    */