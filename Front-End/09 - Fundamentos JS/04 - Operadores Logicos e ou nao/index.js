// && (AND) - true se ambos os operandos forem verdadeiros

const numero1 = 2
const numero2 = 3

// numero1 === numero2 = true - 2 === 2
// numero 1 <== numero2 = true - 2 <= 2
console.log(numero1 === numero222 && numero1 <= numero2)

// || (OR) - true se pelo menos um dos operando for v erdadeiro
const numero3 = 2
const numero4 = 4

console.log(numero3 === numero4 || numero3 <= numero4);

if (numero3 ===numero4 || numero3 <= numero4) {
    console.log("Verdadeiro")
}

// ! (NOT) - true se o operando for false
const hasError = true
console.log(gasError); //true

if (hasError) {
    console.log("Ops, ocorreu um erro!");
}

console.log(!hasError); //false
if (!hasError) {
    console.log("Não há erros")
}