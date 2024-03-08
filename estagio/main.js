//Primeiro exercício
let i = 13;
let soma = 0;
let k = 0;

while (k < i) {
  k++;
  soma += k;
}
console.log(soma);

//Segundo exercício
function fibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b <= numero) {
    if (b === numero) {
      console.log(`O número: ${numero}, pertence a sequência de Fibonacci.`);
      return;
    }

    let temp = b;
    b = a + b;
    a = temp;
  }

  console.log(`O número: ${numero}, não pertence a sequência de Fibonacci.`);
}
fibonacci(90);

//Terceiro exercício
function stringInvertida(string) {
  let stringInvetida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvetida += string[i];
  }
  return console.log(stringInvetida);
}
stringInvertida("Estágio");
