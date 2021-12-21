const express = require('express')
const router = express.Router()
const {curso} = require('../models')
const listaCursos = []

router.get('/', async(req, res) => {
    const cursos =await curso.findAll()

    // res.send(' <h1> Lista de cursos! </h1>')
    res.json(cursos)
})


router.post('/', async(req, res) => {
    const dadosCursos = req.body
    const nome = "AGRONOMIA"
    const ch = 3000
    await curso.create({nome, ch})

    res.send("Curso adicionado com sucesso!")
})

module.exports = router