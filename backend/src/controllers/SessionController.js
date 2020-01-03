// Metodos para o controller:
//  index - Listagem das seções;
//  show - Lista especifica de uma seção;
//  store - Criando uma seção;
//  update - Atualizando uma seção;
//  destroy - Deletar uma seção;

const User = require('../models/UserModel')

module.exports = {

    // definindo uma funcao store(criacao) é assincrona
    async store(req, res){

        // criando um parametro email, passando o conteudo do email da request
        const { email }= req.body;
        // == const email = req.body.email (mesma coisa)!!!

        // criando a variavel usuario que busca o email no banco
        let user = await User.findOne({ email });

        // verificando se o já existe um usuario com o email informado
        if(!user){

            // await obriga o sistema a esperar concluir o que solicita;
            user = await User.create({ email }); 
            // Criando um objeto user de User com o parametro email contido nele;
             
        }

        return res.json(user);
    }
};