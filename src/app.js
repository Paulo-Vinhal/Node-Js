// const express = require('express') // A função require exporta módulos javascript, neste caso o express.
import express from 'express' // Está é a forma atualizada de se importar módulos, o ES.
const app = express() // É necessário instânciar o express através do seu contrutor express()


// Mock
const clientes = [
    {id:1, nome: 'Paulo', idade: 25},
    {id:2, nome: 'Andre', idade: 28},
    {id:3, nome: 'Carlos', idade: 32},
    {id:4, nome: 'Marcela', idade: 21},
]




// Definindo rotas
app.get('/', (req,res) =>{
    res.send('Hello World!')
})

app.get('/clientes', (req,res) => {
    res.status(200).send(clientes)
})

app.get('/produtos', (req,res) => {
    res.send('Está página exibirá os produtos.')
})

export default app


