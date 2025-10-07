const express = require('express');
const app = express();

app.use(express.json());

// Importação das rotas
const provasRoutes = require('./routes/provas');

// Uso das rotas
app.use('/provas', provasRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send('API Plataforma de Testes Online - Ativa!');
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});