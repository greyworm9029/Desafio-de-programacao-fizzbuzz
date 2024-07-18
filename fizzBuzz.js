// Desafio de programacao FizzBuzz
let numeros = [];
let contador = 1; 

function fizzBuzz() {
    // Imprime "FizzBuzz" se for divisivel por 3 e 5
    if (contador % 3 === 0 && contador % 5 === 0) {
        numeros.push("FizzBuzz");
    } 
    	// Imprime "Fizz" se for divisivel por 3
    	else if (contador % 3 === 0) {
        numeros.push("Fizz");
    	// Imprime "Buzz" se for divisivel por 5 
    	} else if (contador % 5 === 0) {
        numeros.push("Buzz");
    	// Imprime apenas o numero se nao for divisivel por 3 ou 5
    	} else {
        numeros.push(contador);
    	}
    
    contador++;
    console.log(numeros);
}
// Testes 
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
