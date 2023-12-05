const e = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//converter dados do formulario em javascript
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
//rotas
app.post('/criar', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao
    const completa = 0

    const sql =`
    INSERT INTO tarefas(descricao, completa)
    VALUE('${descricao}', '${completa}')
    `

    conexao.query(sql, (error) => {
        if (error) {
            return console.log(erro)
        }

        resposta.redirect('/')
    })
})

app.get ('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todoapp",
    port: 8080
})

conexao.connect((erro) => {
    if (erro) {
        return console.log(erro)
    }

    console.log("Estou conectado ao MYSQL.")

    app.listen(3000, () => {
        console.log("Servido rodando na porta 3000!")
    })
})