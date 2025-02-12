const number = 26;
const numeroDivisivelPor5 = (number % 5) === 0 ;

if(numeroDivisivelPor5){
    console.log(`O número ${number} é divisível por 5.`)
}
else{
    console.log(`O número ${number} não é divisível por 5.`)
}

