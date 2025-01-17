const veiculo= 'moto';//tipo de veículo
const precoCombustivel = 6.20;//preço do combustível
const kmPorLitro = 30;//km por litro
const distancia = 320;//distancia a ser percorrida


const valorTotal = (distancia / kmPorLitro) * precoCombustivel;

console.log(`O valor total gasto será de R$ ${valorTotal.toFixed(2)}`);//valor total gasto

//.toFixed(2) é para limitar o número de casas decimais a 2