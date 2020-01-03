// Instanciando o multer que uma extensão para usarmos imagens
const multer = require('multer');

// Instandiando o path, onde essa extensao cria uma pasta para armazenar as fts
const path = require('path');

module.exports = {

    // Criando um storage que utiliza o meio de upload de imagem
    storage: multer.diskStorage({

        // definindo o destino que sera a pasta para armazenar
        destination: path.resolve(__dirname, '..', '..', 'uploads'),

        // Definindo o nome do arquivo
        filename: (req, file, cb) =>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        }
    }),
};