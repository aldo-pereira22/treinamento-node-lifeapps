const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model("categorias")
require('../models/Postagem.js')
const Postagem = mongoose.model("postagens")

router.get('/', (req, res)=> {
    // res.send("Página principal do painel admin")
    res.render("admin/index")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})


// router.get('/categorias', (req, res )=> {
//     // res.send("Página de categorias")
//     Categoria.find().then((categorias)=>{
//         res.render("admin/categorias", {categorias: categorias})
//     }).catch((err)=> {
//         req.flash('error_msg', 'Houve um erro ao listar as categorias')
//         res.redirect("/admin")
//     })
// })

router.get("/categorias",(req,res)=>{
    Categoria.find().sort({date:"desc"}).then((categorias)=>{
        res.render("admin/categorias", {categorias:categorias.map(categorias => categorias.toJSON())})
    }).catch((err)=>{
        req.flash("error_msg","Houve um erro ao listar as categorias")
        res.redirect("/admin")
    })
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
router.get("/categorias/edit/:id", (req, res)=> {
    // res.send("Pagina de edição de categoria!!")
    Categoria.findOne({_id:req.params.id}).lean().then((categoria)=> {
        res.render("admin/editcategorias", {categoria:categoria})
    }).catch((err)=> {
        req.flash("error_msg", "Esta categoria não existe")
        res.redirect("/admin/categorias")
        console.log("Está categoria não existe!!")
    })
})

router.post("/categorias/edit", (req, res)=> {
    Categoria.findOne({_id:req.body.id}).then((categoria)=> {
        
        categoria.nome = req.body.nome
        categoria.slug = req.body.slug
        
        cgitategoria.save().then(()=>{
            res.flash("success_msg", "categoria editada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err)=> {
            req.flash("error_msg", "Houve um erro interno ao salvar  a edição da categoria")
            res.redirect("/admin/categorias")
        })

    }).catch((err)=> {
        req.flash("error_msg", "Houve um erro ao editar")
        res.redirect("/admin/categorias")
    })

})



router.post("/categorias/deletar", (req, res)=> {
    Categoria.remove({_id:req.body.id}).then( ()=> {
        req.flash("success_msg", "categoria excluida com sucesso!")
        res.redirect("/admin/categorias")
    }).catch((err)=> {
        req.flash("error_msg", "Houve um erro ao deletar uma categoria")
        res.redirect("/admin/categorias")
    })
})


router.get("/postagens", (req, res)=> {
    res.render("admin/postagens")
})

router.get("/postagens/add", (req, res) => {
    Categoria.find().lean().then((categorias) => {

        res.render("admin/addpostagem", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário")
        res.redirect("/admin")
    })
})


router.post("/postangens/nova", (req, res) => {
    var erros = []
    if(req.body.categoria == 0){
        erros.push( {texto: "Categoria inválida, registre uma categoria!" })
    }

    if(erros.length > 0){
        res.render("admin/addpostagem", {erros: erros})
    }else {
        const novaPostagem = {
            titulo: req.body.titulo,
            descricacao: req.body.descricacao,
            conteudo: req.body.conteudo,
            categoria:req.body.categoria,
            slug: req.body.slug
        }

        new Postagem(novaPostagem).save().then(() => {
            req.flash("success_msg", "Postagem criada com sucesso!")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro durante o salvamento da postagem")
            res.redirect("/admin/postagens")
        })
    }
})
module.exports = router