const express = require('express')
const hb = require('express-handlebars')
const conn = require('./db/conn')
const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', hb.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
