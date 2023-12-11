
const input = document.getElementById("name");
const button = document.querySelector(".js-button");

const serial = document.querySelector('.serial');

const error = document.querySelector('.error')




let r = (Math.random() + 1).toString(36).substring(2);

button.addEventListener('click', onSubmit)

function onSubmit(e) {
  e.preventDefault();
  
  if (input.value === "") {
    error.innerText = `Please, input your name`
    setTimeout(() => {
      error.innerText = ""
    }, 3000)
  }else{
    serial.style.display = "block";
    serial.innerHTML = `<p class ='christmas-animae'>Hey ${input.value}, your serial number is--- ${r}</p>
    <p class= "continue">Click the button below to continue your application</p>
    <a href= "apply.html" class= "apply">Apply For Christmas Grant </a>`;
    input.value = "";
  }
  
  
}