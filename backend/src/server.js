const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

// Instanciando o mongoose => configuração de conexão com o mongoDb
const mongoose = require('mongoose')

const app = express();

// Fazendo a conexão com a database criada no mongoDb Atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-lnnwp.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); //metodo que retorna arquivos estatiocs (pdfs, imgs, etc..)
app.use(routes);

app.listen(3333)
