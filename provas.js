const express = require('express');
const router = express.Router();


let provas = [
    { id: 1, titulo: "Prova de Matemática", id_professor: 1, data_criacao: "2025-10-07" }
];

// CREATE 
router.post('/', (req, res) => {
    res.status(201).json({ message: "Prova criada com sucesso!" });
});

// READ - Listar todas as provas
router.get('/', (req, res) => {
    res.json(provas);
});

// READ - Buscar prova por ID
router.get('/:id', (req, res) => {
    const prova = provas.find(p => p.id === parseInt(req.params.id));
    if (!prova) return res.status(404).json({ message: "Prova não encontrada." });
    res.json(prova);
});

// UPDATE - Atualizar uma prova
router.put('/:id', (req, res) => {
    res.json({ message: `Prova ${req.params.id} atualizada com sucesso!` });
});

// DELETE 
router.delete('/:id', (req, res) => {
    res.json({ message: `Prova ${req.params.id} deletada com sucesso!` });
});

module.exports = router;