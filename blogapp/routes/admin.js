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

    var erros = [];
    if( !req.body.nome || typeof req.body.nome == undefined || req.body.nome == null ){
        erros.push({texto:"Nome inválido"})
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto:"slug inválido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto:"Nome da categoria muito pequeno"})
    }

    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros})
    }else {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug,
            date: new Date()
        }
        // console.log(novaCategoria);
        // console.log(`A categoria é: ${novaCategoria.nome}`);
    
        new Categoria(novaCategoria).save().then(()=> {
            // console.log("Categoria salva com Sucesso!" )
            // console.log(`A categoria é: ${novaCategoria.nome} Slug:${novaCategoria.slug} data: ${novaCategoria.date}`);
            req.flash("success_msg", "Categoria criada com sucesso!")
            res.redirect('/admin/categorias')
        }).catch ((err)=> {

            req.flahs("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
            console.log("Erro ao salvar categoria!"+ err)
            res.redirect('/admin')
        })
    }


})
module.exports = router