const express = require('express')
const app = express();

app.use(express.json())

//let estoque = "lápis"
//let estoque = ["Lapis", "Borracha", "Caderno"]
let estoque = [
    {nome: "Lapis", valor: 1.50, quantidade: 25},
    {nome: "Caderno", valor: 65.50, quantidade: 30},
    {nome: "Caneta", valor: 1.50, quantidade: 35}
]
const porta = 3000;

app.get('/produto', (req, res) => {
    res.json(estoque)

})

app.post('/produto', (req, res) => {
    const novoproduto = req.body;

    estoque.push(novoproduto)

    res.send("produto:" + novoproduto.nome + " cadastrado!")
})

app.listen(porta, () => {
    console.log("Servidor rodando na porta:" + porta)

})