const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosComsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosComsumidos * precoCombustivel;
console.log(`O valor gasto será de R$${valorGasto.toFixed(2)}`);