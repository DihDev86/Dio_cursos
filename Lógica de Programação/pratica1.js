let dadosCompra ={
    nome: "Diêgo Ernandes",
    cpf: "07162957412",
    produtos:{
        0:["Monitor gamer", "Preço R$929.99"],
        1:["Mouse gamer", "Preço R$29.99"],
        2:["Teclado gamer", "Preço R$ 299.99"]
    }
}
generateDadosCompra(dadosCompra)

function generateDadosCompra(){
    console.log(`Nome do comprador: ${dadosCompra.nome}`)
    console.log(`CPF: ${dadosCompra.cpf}`)
    console.log("----------------------------------")
    console.log(`Lista de produtos: ${dadosCompra.produtos[0]}`)
}
