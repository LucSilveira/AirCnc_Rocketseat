const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');  

// Chamando as nossas rotas criadas
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboarController');
const BookingController = require('./controllers/BookingController');

// Chamando metodo do express responsavel pelas rotas - Router
const routes = express.Router();

const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store)

// routes.post('/users', (req, res) =>{
//     return res.json(req.body);
// }); Metodo utilizado quando não se possui uma rota com controller especifico

// exportando rotas para que quaisquer sistema possa utilizar
module.exports = routes;