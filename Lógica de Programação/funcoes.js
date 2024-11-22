function ranked ( vitoria, derrota){
    let somatoria = vitoria - derrota ;
    return somatoria
}

let saldoRankeds = ranked(110,8)
    if(saldoRankeds < 10){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Ferro")
    }
    else if(saldoRankeds >= 11 && saldoRankeds <= 20){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Bronze")
    }
    else if(saldoRankeds >= 21 && saldoRankeds <= 50){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Prata")
    }

    else if(saldoRankeds >= 51 && saldoRankeds <= 80){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Ouro")
    }

    else if(saldoRankeds >= 81 && saldoRankeds <= 90){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Diamante")
    }

    else if(saldoRankeds >= 91 && saldoRankeds <= 100){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Lendário")
    }

    else if(saldoRankeds > 101){
        console.log("O herói tem um saldo de vitórias de " + saldoRankeds + " e seu nível é Imortal")
    }
    else{
        console.log("Sem classificação")
    }


    






      