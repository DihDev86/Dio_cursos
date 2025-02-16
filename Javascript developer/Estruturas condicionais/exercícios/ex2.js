const peso = 105;
const altura = 1.82;
const imc = peso /(altura * altura);


if(imc < 18.5){
    console.log(`Você está abaixo do peso, seu IMC é ${imc.toFixed(2)}`);
}
else if(imc >= 18.5 && imc <= 25){//Aqui checamos 2 condições ao mesmo tempo. Se uma das condições for verdadeira, o código dentro do if será executado. A ideia aqui é delimitar um intervalo de valores. Se o valor do imc estiver entre 18.5 e 25, o código dentro do if será executado. As outras condições abaixo seguem a mesma lógica.
    console.log(`Você está com o peso normal, seu IMC é ${imc.toFixed(2)}`);
}
else if(imc >25 && imc <= 30){
    console.log(`Você está acima do peso, seu IMC é ${imc.toFixed(2)}`);
} 
else if(imc >30 && imc <=40){
    console.log(`Você está obeso, seu IMC é ${imc.toFixed(2)}`);
}
else{
    console.log(`Você está com obesidade mórbida, seu IMC é ${imc.toFixed(2)}`)
}

//Sempre que quisermos verificar mais de uma condição ao mesmo tempo, usamos o &&. Se quisermos verificar apenas uma condição, usamos o ||.

//No caso das condições ||, quando um dos valores for verdadeiro, o código dentro do if será executado. No caso das condições &&, os dois valores precisam ser verdadeiros para que o código dentro do if seja executado.