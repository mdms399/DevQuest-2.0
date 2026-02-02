// tipos primitivos

// string - texto
const name = "Marcos Daniel"

// number - numeros
const idade = 28
const pi = 3.14

//boolean
const possuiFaculdade = true

if(possuiFaculdade) {
    console.log("Essa pessoa possui faculdade");
}   else {
    console.log("Essa pessoa não possui faculdade")
}

// undefined - não foi inicializado com algum valor
let cor
console.log(cor);

let pessoa = { nome: "Marcos", idade: 37 }
console.log("O nome da pessoa é:", pessoa.name);
console.log("A idade da pessoa é", pessoa.idade);
console.log("O sexo da pessoa é:", pessoa.sexo);

// null - não tem valor definido
let avaliacao = null
avaliacao = 4