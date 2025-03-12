function teste(){//função sem parâmetros
    console.log('teste');//função sem retorno de valor
}

teste();//chamando a função

function meuNome(nome){//função com parâmetro nome, os parametros são variáveis que recebem valores, eles serve para passar valores para a função
    console.log("Meu nome é : " + nome);//Esse console.log irá imprimir o valor que foi passado como parâmetro para a função.
    //Funções sem retorno recebem o nome de procedimentos, porque eles executam um procedimento, mas não retornam um valor.
}
console.log("-------------------------------------------");
meuNome("Diêgo Ernandes");//chamando a função e passando o valor "Diêgo Ernandes" para o parâmetro nome
meuNome("Talita Mayara");//chamando a função e passando o valor "Talita Mayara" para o parâmetro nome
meuNome("Maria Gabriela");//chamando a função e passando o valor "Maria Gabriela" para o parâmetro nome


/*

O que é uma função? É um bloco de código que pode ser executado várias vezes, sem a necessidade de escrever o mesmo código repetidamente.
O function funciona como um botão, quando chamamos a funcão, o código dentro da função é executado. Os parametros são variáveis que recebem valores, eles serve para passar valores para a função. Quando chamamos a função, passamos valores para os parametros. O valor que passamos para o parametro é chamado de argumento.

1. Quando chamamos a função, passamos valores para os parametros. 
2. O argumento é o valor que passamos para o parametro.
3. O parametro é a variável que recebe o argumento. 
4. Depois de chamar a função, o código dentro da função é executado

#Pense no return como um serviço de entrega:

A função recebe um pedido (parâmetro)
Processa ele (cálculo)
Entrega o resultado de volta (return)
O resultado pode então ser usado em outras partes do código
*/

console.log("-------------------------------------------");

function quadrado(valor){
    return valor * valor;//retorna o valor do quadrado do valor passado como parâmetro, esse retorno é armazenado em uma variável ou impresso no console.
}

const quadradoDeDez = quadrado(10);//chamando a função e passando o valor 10 para o parâmetro valor, o valor retornado pela função é armazenado na variável quadradoDeDez
console.log(quadradoDeDez);//imprimindo o valor retornado pela função

console.log("-------------------------------------------");

function incrementarJuros (valor, percentualJuros){//função com dois parâmetros
    const valorDeAcrescimo = (percentualJuros /100) * valor;//calculando o valor de acrescimo
    return valor + valorDeAcrescimo;//retornando o valor com o acrescimo
}

console.log(incrementarJuros(100,10));//chamando a função e passando os valores 100 e 10 para os parâmetros valor e perentualJuros, o valor retornado pela função é impresso no console