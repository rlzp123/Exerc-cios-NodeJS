const express = require('express');
const app = express();
const feedbackRoutes = require('./routers/feedbacks');

app.use(express.json()); 
app.use('/feedbacks', feedbackRouters);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});