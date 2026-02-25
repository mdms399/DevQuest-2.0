// funcao anonima é uma funcao que não tem nome
const saudacao = function(nome) {
    console.log(`Olá, tudo bem, ${nome}?`);;
    
}

saudacao("Maria")

//funcao nomeada - sofre hoistin, ou seja, ela pode ser chamda antes de ser decladara

// function saudacao() {
//     console.log("Olá, tudo bem?");
// }

// funcoes de seta - arrow functions
const saudacao1 = (nome1) => {
    return `Olá, tudo bem, ${nome1}?`
}

console.log(saudacao1("Marcos"));
