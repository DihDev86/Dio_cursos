let nome = "Diêgo Ernandes";
let cpf = "07162957412";
let produtos = ["Monitor Gamer", "Teclado Gamer", "Mouse Gamer"]
let precos = [900.00, 200.00, 60.00]

function notaFistal(nome,cpf,produtos,precos){
    console.log("Nome do Comprador: " + nome)
    console.log("CPF do comprador: " + cpf)
    console.log("-------------------------------")
    console.log("Produto comprado: " + produtos[0])
    console.log("Preço do produto R$ " + precos[0])
    console.log("-------------------------------")
    console.log("Produto comprado: " + produtos[1])
    console.log("Preço do produto R$ " + precos[1])
    console.log("-------------------------------")
    console.log("Produto comprado: " + produtos[2])
    console.log("Preço do produto R$ " + precos[2])

}

notaFistal(nome,cpf,produtos,precos)