const habilitado = true;//boolean
const idade = 17;//number

if (idade >= 18 && habilitado) {//operadores lógicos
    console.log('Pode dirigir');//mensagem
} else {//senão     
    console.log('Não pode dirigir');//mensagem
    }

let permissaoPais= true;//boolean
let idadeParaViajarSozinho=17;//number
let passaporte = false;//boolean

if(idadeParaViajarSozinho >= 18 || permissaoPais && passaporte){//operadores lógicos
    console.log('Pode viajar');//mensagem
}   
else{//senão
    console.log('Não pode viajar');//mensagem
}