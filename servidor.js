// Arquivo separado para o servidor

import app from './src/app.js' // Exportando a instância do express para dentro do servidor.js

const port = 3000 // Definindo a porta que o servidor irá escutar

// Escutar a porta 3000
app.listen(port, () => {
    console.log(`O Servidor está escutando na porta: ${port}`)
})