let test = document.querySelector('#deviceTest');
let ua = window.navigator.userAgent;
let device = ua.split('(')
let newContent = document.createTextNode(device[1]);
test.appendChild(newContent);

if(device[1]) {

}