// Chamando a dependencia express do sistema em uma constante para toda a aplicacao
const express = require('express'); //Express é uma 'framework' onde ajuda em questoes como metodos http

// Criando a aplicação através da função 'express()'
const app = express();

// Falando para o metodo express utilizar a estrutura json
app.use(express.json());

// Defindo a url na qual será acessado o sistema
app.post('/users', (req, res) => {
    // nos metodos de busca, passar o id na rota - (/'nomeURL'/:id)

    // Definindo qual via ser a resposta do usuario, após ele fazer uma requisição
    return res.json(req.body) //req.body => passando o corpo do meu json

    //return res.json({ id: req.params.id})
    // |> res.params => acessando os parametros das nossas rotas - (normalmente para edicoes e delecoes)

    //return res.json({ idade: req.query.idade}) 
    // |> req.query => passando os parametros para nossas querys - (normalmente para filtros)
    
});

// Definindo a porta na qual sera possivel acessar a aplicação
app.listen(3332);