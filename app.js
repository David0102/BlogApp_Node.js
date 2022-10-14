//Carregando modulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
//const mongoose = require("mongoose")

//Configurações
//Handlebars
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json)
//BodyParser
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//mongoose

//Rotas

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})
