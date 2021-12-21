const express = require('express')
const router = express.Router()

const listaCursos = []

router.get('/', (req, res) => {
    // res.send(' <h1> Lista de cursos! </h1>')
    res.json(listaCursos)
})


router.post('/', (req, res) => {
    const dadosCursos = req.body
    console.log(dadosCursos)
    listaCursos.push(dadosCursos)
    res.send("Curso adicionado com sucesso!")
})

module.exports = router