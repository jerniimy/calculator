let expression = document.querySelector('#expression');
expression.oninput = function(){
    this.value = this.value.replace(/[A-Za-zА-Яа-яЁё?!@#$%^&|]/g, '');
    this.value = this.value.replace(/[=]/g, '+');
    this.value = this.value.replace(/[,]/g, '.');
  }
let resultOfExp;
function focusInput() {
  let input = expression;
  input.focus();
}
function clearAll() {
  element = document.getElementById("expression");
  element.value = '';
  focusInput();
};
function inputExp(symbol) {
   element = document.getElementById("expression");
   element.value += symbol;
   focusInput();
};
function giveResult() {
    resultOfExp = eval(element.value);
    element = document.getElementById("expression");
    element.value = resultOfExp;
    focusInput();
};
document.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
         giveResult();
    }
    else if (event.keyCode === 46) {
       clearAll();
    }
    return element = document.getElementById("expression");
})
function copyFunction() {
  element = document.getElementById("expression");
  navigator.clipboard.writeText(element.value);
  focusInput();
}

function greeting() {
  element = document.getElementById("expression");
  element.value = 'hi!! type "h" to learn more about me';
};
let modal = document.getElementById("modal-window");
function closeWindow() {
  modal.classList.remove("active");
}
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) {
      closeWindow()
    }
  });
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 72) {
      modal.classList.add("active");
    }
  });
