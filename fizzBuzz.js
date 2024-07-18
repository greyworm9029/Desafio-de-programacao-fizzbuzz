// Desafio de programação FizzBuzz
let numeros = [];
let contador = 1;

function fizzBuzz() {
    // Contagem de 1 a 100
    while (contador <= 100) {
        // Se um número for múltiplo de 3 e de 5, imprima "FizzBuzz"
        if (contador % 3 === 0 && contador % 5 === 0) {
            numeros.push("FizzBuzz");
        } // Se um número for múltiplo de 3, imprima "Fizz"
        else if (contador % 3 === 0) {
            numeros.push("Fizz");
        } // Se um número for múltiplo de 5, imprima "Buzz"
        else if (contador % 5 === 0) {
            numeros.push("Buzz");
        } else {
            numeros.push(contador);
        }
        // Soma +1 a cada chamada da função
        contador++;
    } 
    // Imprime os números dentro da lista
    console.log(numeros);
}

// Resultado
fizzBuzz();