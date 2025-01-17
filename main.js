"use strict";
function hora() {
  let agora = new Date().getHours();
  if (agora > 18) {
    return "Boa noite";
  } else if (agora > 12) {
    return "Boa tarde";
  } else {
    return "Bom dia";
  }
}

let name = prompt("Qual seu nome: ");
console.log(hora() + ", " + name); 