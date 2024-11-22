function fazerMagica (){
    console.log("Abracadabra!")
}

/* Funções em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. Elas permitem organizar, modularizar e reutilizar o código, tornando os programas mais eficientes e fáceis de manter. */

/* 
O que é uma função?
Uma função é um conjunto de instruções agrupadas para realizar uma tarefa ou calcular um valor. Em JavaScript, você pode criar uma função com a seguinte sintaxe básica:
*/

/* function nomeDaFuncao(parametro1, parametro2) {
    // Bloco de código a ser executado
    return resultado; // Opcional, retorna um valor*/


fazerMagica()

function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3); // Chamada da função
console.log(resultado); // 8

/* 
Para que servem as funções?
As funções servem para:

-Evitar repetição de código: Você pode escrever o código uma vez e reutilizá-lo em diferentes partes do programa.
-Melhorar a organização: Elas ajudam a dividir o código em partes menores, mais fáceis de entender e gerenciar.
-Facilitar a manutenção: Alterar o comportamento de uma função impacta todas as partes do programa que a utilizam, eliminando a necessidade de alterar o código em vários lugares.
-Encapsular lógica: Você pode ocultar os detalhes de implementação e expor apenas a funcionalidade.

Por que usar funções?

-Reutilização: Ao usar funções, você evita duplicar código.
-Clareza: Funções bem nomeadas tornam o código mais legível e intuitivo.
-Modularidade: Cada função realiza uma tarefa específica, o que torna o programa mais fácil de entender e depurar.
-Manutenção: Corrigir ou atualizar o comportamento é mais simples porque as mudanças são centralizadas.
*/

// Calculadora de desconto
function calcularDesconto(preco, desconto) {
    return preco - (preco * desconto / 100);
}

let precoFinal = calcularDesconto(100, 20);
console.log(precoFinal); // 80

// Saudação
function saudacao(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo.`);
}

saudacao("Diego"); // Olá, Diego! Seja bem-vindo.


/*
Conclusão
As funções são ferramentas essenciais no JavaScript porque tornam o código mais modular, reutilizável e fácil de manter. Elas são um dos pilares da programação e ajudam a construir sistemas eficientes e escaláveis. */