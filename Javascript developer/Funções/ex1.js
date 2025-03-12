function escrevaMeuNome(nome){
    return(`Meu nome é ${nome}`)//Return restorna o valor que foi colocar ao chamar a função para para o parametro nome. 
}

function verificarIdade(idade){//Verificamos a idade 
    if(idade >= 18){
        console.log(escrevaMeuNome("Diego Ernandes") + " e eu sou maior de idade!")// Aqui chamamos a função escrevaMeuNome que retorna o seu valor + mais o nome guardado no parametro.
    }
    else{
        console.log(escrevaMeuNome("Diego Ernandes") +" e eu sou menor de idade!")
    }
}

verificarIdade(12)// A idade é dada como parametro e guardada em (idade), depois é verificadas as condições para ver se é maior ou menor de idade. 
