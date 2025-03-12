//Do lado de fora da função main, criamos funções que serão usadas dentro da função main. Essas funções são chamadas de funções auxiliares. Elas são funções que ajudam a função main a executar uma tarefa específica. As funções auxiliares são criadas para dividir o código em partes menores, facilitando a manutenção e a leitura do código. Cada função auxiliar é responsável por uma tarefa específica.

function calcularJuros(){//função auxiliar que calcula o valor do juros.

}


function main (){// A função main é a função principal do programa, ela é a primeira função a ser chamada.
    console.log("Programa principal iniciado...");//Imprimindo uma mensagem no console
    calcularJuros();//Chamando a função calcularJuros
}

main();//Chamando a função main


