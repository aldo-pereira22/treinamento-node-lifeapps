const express = require('express')
const router =  express.Router()

const cursosRouter = require('./cursos')
const estudantesRouter = require('./estudantes')




router.get('/', (req, res) => {
    res.send("App On-Line!")
})

router.use('/cursos', cursosRouter)
router.use('/estudantes', estudantesRouter)

module.exports = router