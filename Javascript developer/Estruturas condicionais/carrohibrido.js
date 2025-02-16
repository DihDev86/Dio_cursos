const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

if(tipoCombustivel === 'Etanol'){
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`O valor gasto foi de R$${valorGasto.toFixed(2)} de etanol`);//Essa linha de código é para mostrar o valor gasto com o combustível. Ela precisa ser colocada dentro do if, pois só vai ser executada se o tipoCombustivel for igual a Etanol. Essa linha precisa ficar dentro do escopo do if.
}
else{
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`O valor gasto foi de R$${valorGasto.toFixed(2)} de gasolina`);//Essa linha de código é para mostrar o valor gasto com o combustível. Ela precisa ser colocada dentro do else, pois só vai ser executada se o tipoCombustivel for igual a Gasolina.Essa linha precisa ficar dentro do escopo do else.
}




