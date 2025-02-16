/*
Elabore um algoritmo que calcule o que dever ser pago por produto, considerando o preço normal da etiqueta e a escolha de condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const condicaoPagamento = 3;
const numberPArcelas = 5;

if(condicaoPagamento === 1){
    const valorComDesconto = precoEtiqueta - (precoEtiqueta * 0.10);
    console.log(`O valor do produto é R$${valorComDesconto.toFixed(2)}`);
}

else if(condicaoPagamento ===2){
    const valorComDesconto = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`O valor do produto é R$${valorComDesconto.toFixed(2)}`);
}

else if (condicaoPagamento === 3){
    const valorComDesconto = precoEtiqueta / 2; 
    console.log(`O valor da parcelado é R$${valorComDesconto.toFixed(2)}`);
}

else if(condicaoPagamento === 4){
    const valorDaparcela =  precoEtiqueta / numberPArcelas;
    const valorComJutos = valorDaparcela + (valorDaparcela * 0.10);
    console.log(`O valor da parcela é R$${valorDaparcela.toFixed(2)} e o valor total com juros de 10% R$${valorComJutos.toFixed(2)}`);
}
