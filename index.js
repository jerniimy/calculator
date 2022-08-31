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
});
function greeting() {
  element = document.getElementById("expression");
  element.value = 'hi!! type "h" to learn more about me';
  {
  document.addEventListener('keyup', function(event) {
      if (event.keyCode === 72) {
        element.value = 'wow';
        focusInput();
      }
    });
  }
}
