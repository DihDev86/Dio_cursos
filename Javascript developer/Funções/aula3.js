function calcularImc(peso, altura){//função para calcular o IMC, com 2 parametros peso e altura
    return peso / Math.pow(altura, 2); //retorna o peso dividido pela altura ao quadrado (altura^2), o math.pow é uma função que eleva um número a uma potência.Primeiro ele vai elevar a altura ao quadrado e depois vai dividir o peso pelo resultado da potenciação.
}

function classificarImc(imc){//função para classificar o IMC, com 1 parametro imc
    if(imc < 18.5){
    return(`Você está abaixo do peso, seu IMC é ${imc.toFixed(2)}`);//retorna a mensagem "Você está abaixo do peso, seu IMC é" e o valor do imc com 2 casas decimais, essa mensagem é retornada pela função e é armazenada na variavel imc, que é exibida na tela.
    }
    else if(imc >= 18.5 && imc <= 25){
    return(`Você está com o peso normal, seu IMC é ${imc.toFixed(2)}`);
    }
    else if(imc >25 && imc <= 30){
    return(`Você está acima do peso, seu IMC é ${imc.toFixed(2)}`);
    } 
    else if(imc >30 && imc <=40){
    return(`Você está obeso, seu IMC é ${imc.toFixed(2)}`);
    }
    else{
    return(`Você está com obesidade mórbida, seu IMC é ${imc.toFixed(2)}`)
}

}

(function(){//função principal, que chama as funções auxiliares calcularIMC e classificarIMC, ela é uma função anônima, ou seja, ela não tem nome e é executada assim que é chamada.
const peso = 105;
const altura = 1.82;
const imc = calcularImc(peso, altura);//chama a função calcularIMC e passa os parametros peso e altura, os valores dos parametros peso e altura já estão definidos acima no código e o resultado é armazenado na variavel imc
console.log(classificarImc(imc));//Chama a função classificarIMC e passa o parametro imc, que é o resultado da função calcularImc, o resultado é exibido no console.log, ou seja, o resultado de classificarIMC é exibido no console.log e em seguida o valor da variavel imc também é exibido no console.log
})()

//O código acima é um exemplo de como podemos usar funções para calcular o IMC e classificar o IMC de uma pessoa. A função calcularIMC calcula o IMC e a função classificarIMC classifica o IMC. A função main é a função principal que chama as outras funções. 

/* 
1. A função main é a função principal que chama as outras funções. Nela temos as variáveis peso e altura que são os valores que serão passados como parâmetros para a função calcularIMC.
2. As funcções calcularIMC e classificarIMC são as funções que calculam e classificam o IMC. Elas são podem ser chamadas funções auxiliares, pois são chamadas dentro da função main.

Funções tem 3 partes:
1. Nome da função
2. Parâmetros
3. Corpo da função

Funções auxiliares são funções que são chamadas dentro de outras funções. Elas são chamadas funções auxiliares, pois são chamadas dentro da função main.

#Coisas que conseguimos fazer com funções:
-As funções tem comportamento semelhante a uma variável, pode podemos armazenar o retorno de uma função em uma variável.
-Podemos chamar uma função dentro de outra função.
-Podemos chamar uma função dentro de um console.log. Ao imprimir a função, será exibido que a função é uma função.
-Podemos chamar uma função dentro de um if, else if, else.
-Podemos chamar uma função dentro de um for.
-Podemos chamar uma função dentro de um while.
-Podemos chamar uma função dentro de um switch.
-Podemos chamar uma função dentro de um try, catch, finally.

##Conseguimos manipular as funções como se fossem variáveis.
-Podemos reatribuir uma função a uma variável.
-Podemos passar uma função como argumento para outra função.
-Podemos retornar uma função de uma função.

const main2 = main; //Atribui a função main a variável main2

#função imeadiatamente invocada

(function(){
    console.log("Função imeadiatamente invocada");
})();

#função imeadiatamente invocada funciona como uma função anônima, ou seja, não tem nome. Ela é uma função que é declarada e invocada imediatamente. Ela é declarada dentro de parênteses e em seguida é invocada com os parênteses no final. Ela é uma função que é declarada e invocada ao mesmo tempo. É muito usada na programação web. 
Essa funções são criadas para não poluir o escopo global. Elas são criadas para serem usadas apenas uma vez.

*/