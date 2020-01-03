const mongoose = require('mongoose');

// Estrututa do nosso objeto(esquema) de usuario
const UserSchema = new mongoose.Schema({
    email: String,
});

// Exportando o model para poder ser acesso na aplicação
module.exports = mongoose.model('User', UserSchema);