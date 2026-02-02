// global - podemos usar as variaveis em qualquer lugar do nosso codigo
let idade = 28

// local - variaveis ficam reservadas somente em funcoes onde foram criadas
function mostrarIdade () {
    let name = "Marcos";
    console.log(name);
    console.log(idade);

//bloco - tudo dentro das {}, variaveis ficam reservadas ao bloco onde foram criadas
    if (idade > 18) {
        let podeDirigir = true;
        console.log("Maior de idade");
        console.log(podeDirigir)
    }   else {
        console.log("Menor de idade");
    }
}

mostrarIdade();