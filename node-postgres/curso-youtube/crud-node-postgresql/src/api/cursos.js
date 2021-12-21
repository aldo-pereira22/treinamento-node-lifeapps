const express = require('express')
const router = express.Router()
const {curso} = require('../models')
const CursoService = require('../services/cursos')
const {body, check,validationResult} = require('express-validator')

const cursoService = new CursoService(curso)

router.get('/', async(req, res) => {
    const cursos = await cursoService.get()

    // res.send(' <h1> Lista de cursos! </h1>')
    res.status(200).json(cursos)
})


router.post('/',
    body('nome').not().isEmpty().trim().escape(),
    check('ch')
        .notEmpty()
        .matches(/\d/)
        .withMessage('Deve ser um número válido'),
    async(req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    const dadosCursos = req.body
    const nome = "AGRONOMIA"
    const ch = 3000
    try {
        await cursoService.adicioar({nome, ch})
        res.status(201).send("Curso adicionado com sucesso!")
        
    } catch (erro) {
        res.status(400).send(erro.message)
    }
})

module.exports = router