let test = document.querySelector('#deviceTest');
let device = window.navigator.userAgent;
let newContent = document.createTextNode(device);
test.appendChild(newContent);