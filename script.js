let greeting = "Welcome";
alert(greeting)

const randomNumber = Math.random();
console.log(randomNumber);

const randomButton = document.getElementById("randomButton");
const displayNumber = document.getElementById("displayNumber");
const min = 1;
const max = 10;

randomButton.addEventListener('click',function(){
    displayNumber.innerHTML = Math.floor(Math.random() * (max - min + 1))
})