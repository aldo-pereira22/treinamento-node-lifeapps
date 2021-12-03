const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model("categorias")

router.get('/', (req, res)=> {
    // res.send("Página principal do painel admin")
    res.render("admin/index")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})


router.get('/categorias', (req, res )=> {
    // res.send("Página de categorias")
    res.render("admin/categorias")
})
router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

router.post("/categorias/nova", (req, res)=> {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug,
        date: new Date()
    }
    // console.log(novaCategoria);
    // console.log(`A categoria é: ${novaCategoria.nome}`);

    new Categoria(novaCategoria).save().then(()=> {
        // console.log("Categoria salva com Sucesso!" )
      
        console.log(`A categoria é: ${novaCategoria.nome} Slug:${novaCategoria.slug} data: ${novaCategoria.date}`);
    }).catch ((err)=> {
        console.log("Erro ao salvar categoria!"+ err)
    })
})
module.exports = router