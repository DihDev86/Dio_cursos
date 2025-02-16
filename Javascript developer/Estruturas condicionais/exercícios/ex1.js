const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

media = (nota1+ nota2 + nota3) /3;

if(media < 5){
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está reprovado`);
}

else if(media >= 5 && media <=7){// Para delimitar o intervalo, é necessário usar o &&, pois estamos verificando duas condições ao mesmo tempo. Se usarmos o ||, estamos verificando apenas uma condição. Começamos com o menor valor e terminamos com o maior valor. E o sinal de >= 5 é para incluir o 5, pois se usarmos o > 5, o 5 não será incluído. E o <= 7 é para incluir o 7, pois se usarmos o < 7, o 7 não será incluído.
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está de recuperação`);
}
else{
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está aprovado`);
}
