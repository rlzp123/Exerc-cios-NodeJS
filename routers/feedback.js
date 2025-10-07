const express = require('express');
const router = express.Router();


let feedbacks = [
    { 
        id_feedback: 1, 
        tipo: "reclamação", 
        mensagem: "Demora no atendimento.", 
        data_envio: "2025-10-07T10:00:00", 
        status: "pendente", 
        id_cliente: 1 
    }
];

// CREATE 
router.post('/', (req, res) => {
    const novoFeedback = req.body;
    feedbacks.push(novoFeedback);
    res.status(201).json({ mensagem: "Feedback cadastrado com sucesso!", novoFeedback });
});

// READ - Listar todos os feedbacks
router.get('/', (req, res) => {
    res.json(feedbacks);
});

// READ - Buscar feedback específico por ID
router.get('/:id', (req, res) => {
    const feedback = feedbacks.find(f => f.id_feedback === parseInt(req.params.id));
    if (!feedback) return res.status(404).json({ erro: "Feedback não encontrado." });
    res.json(feedback);
});

// UPDATE - Atualizar status de um feedback
router.put('/:id', (req, res) => {
    const feedback = feedbacks.find(f => f.id_feedback === parseInt(req.params.id));
    if (!feedback) return res.status(404).json({ erro: "Feedback não encontrado." });

    feedback.status = req.body.status || feedback.status;
    res.json({ mensagem: `Status do feedback ${req.params.id} atualizado com sucesso!`, feedback });
});

// DELETE 
router.delete('/:id', (req, res) => {
    feedbacks = feedbacks.filter(f => f.id_feedback !== parseInt(req.params.id));
    res.json({ mensagem: `Feedback ${req.params.id} removido com sucesso!` });
});

module.exports = router;