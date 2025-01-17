let valorH = prompt("Qual o valor da hora de trabalho? ");
//valorH = parseFloat(valorH);

let horaT = prompt("Quantas horas você trabalhou no mês? ");
//horaT = parseFloat(horaT);

let salario = valorH * horaT;
let descontoIR = salario * 0.11;
let descontoINSS = salario * 0.08;
let descontoS = salario * 0.05;
let salarioL = salario - descontoINSS - descontoIR - descontoS;
console.log(`O valor total do salário bruto é: R$ ${salario}`);
console.log(`O valor do desconto do IR é: R$ ${descontoIR}`);
console.log(`O valor do desconto do INSS é: R$ ${descontoINSS}`);
console.log(`O valor do desconto do sindicato é: R$ ${descontoS}`);
console.log(`O valor do salário líquido é: R$ ${salarioL}`);