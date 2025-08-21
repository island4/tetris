let test = document.querySelector('#deviceTest');
let ua = window.navigator.userAgent;
let device = ua.split('(')[1].split(';');
let newContent = document.createTextNode(device[0]);
test.appendChild(newContent);

if(device[1]) {

}