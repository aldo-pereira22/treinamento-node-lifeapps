const express = require('express')
const router = express.Router()
const {curso} = require('../models')
const CursoService = require('../services/cursos')

const cursoService = new CursoService(curso)

router.get('/', async(req, res) => {
    const cursos = await cursoService.get()

    // res.send(' <h1> Lista de cursos! </h1>')
    res.status(200).json(cursos)
})


router.post('/', async(req, res) => {
    const dadosCursos = req.body
    const nome = "AGRONOMIA"
    const ch = 3000
    try {
        await cursoService.adicioar({nome, ch})
        res.status(201).send("Curso adicionado com sucesso!")
        
    } catch (error) {
        res.status(400).send("Não foi possível adicionar o curso!")
    }
})

module.exports = router