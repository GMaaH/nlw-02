//data

const proffys = [
      {
          name: "Diego Fernandes", 
          avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
          whatsapp:" (11) 988371498",
          bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
          subject:"Química", 
          cost:"20", 
          weekday:[], 
          time_from:[], 
          time_to:[]
      },
      {
            name: "Diego Fernandes", 
            avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
            whatsapp:"899827345",
            bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
            subject:"Tecnologias", 
            cost:"40", 
            weekday:[], 
            time_from:[], 
            time_to:[]
      }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação fisíca",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades 

//pegar uma aula = passa o número e retorna o nome
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

// apresentação da página inicial
function pageLanding(req,res){
    return res.render("index.html")
}
// apresentação da página de estudos
function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
// pegando os dados em memória
function pageGiveClasses(req,res){
    const data = req.query
    
    
    //se tiver data (dados) 
    const isNotEmpty = Object.keys(data).length != 0 
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)
        
        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
        // se nao, mostrar a página
        return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

//configurar nunjucks (templates engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

// Inicio e configuração do servidor
server
//configurar arquivos estáticos (css, script, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5500) 