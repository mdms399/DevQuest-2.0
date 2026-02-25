// As condicionais são estruturas de controle de fluxo do nosso código

// - Se for isso, então faca aquilo
// - Caso não seja isso, então faca outra coisa

const filme = "Homem Aranha"

if(filme === "Harry Potter") { //false
    console.log("Caiu no if do Harry Potter")
} else if (filme === "Homem Aranha") { //true
    console.log("Caiu no else if do Homem Aranha")
} else if (filme === "Batman") {
    console.log("Caiu no else if do Batman")
} else {
    console.log("Não pegou em nenhum")
}

const idade = 18;
const cidade = "Minas Gerais"

if(idade >= 18 && cidade === "Minas Gerais") {
    console.log("Pode entrar na festa")
} else {
    console.log("Não pode entrar na festa")
}

// operador ternário
// condicao ? valor para verdadeiro : valor para falso

idade >= 18 ? "Pode entrar na festa" : "Não pode entrar na festa"

// const podeEntrarNaFesta = 