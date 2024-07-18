// Desafio de programacao FizzBuzz
function fizzBuzz() {
    let nomearMultiplos= ["Fizz", "Buzz", "FizzBuzz"];
    let numeros = parseInt(prompt("Digite um numero: "));
    
    if (numeros % 3 === 0 && numeros % 5 === 0) {
        console.log(nomearMultiplos[2]); 
    } else if (numeros % 3 === 0) {
        console.log(nomearMultiplos[0]);
    } else if (numeros % 5 === 0) {
        console.log(nomearMultiplos[1]);
    } else {
        console.log(numeros);
    }
}
// Resultado
fizzBuzz();
