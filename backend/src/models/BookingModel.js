const mongoose = require('mongoose');

// Estrututa do nosso objeto(esquema) de usuario
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //passando o id do usuario
        ref: 'UserModel'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //passando o id do usuario
        ref: 'SpotModel'
    },
});

// Exportando o model para poder ser acesso na aplicação
module.exports = mongoose.model('Booking', BookingSchema);