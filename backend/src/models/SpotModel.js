const mongoose = require('mongoose');

// Estrututa do nosso objeto(esquema) de usuario
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //passando o id do usuario
        ref: 'UserModel'
    }
}, {
    toJSON: {
        virtuals : true, //convertendo o atributo virtual em true, para poder ter acesso a img
    }
});

// Criando um novo atributo computado pelo JS que nao sera atrelado ao banco
// para poder ter acesso a imagem
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`;
});

// Exportando o model para poder ser acesso na aplicação
module.exports = mongoose.model('Spot', SpotSchema);