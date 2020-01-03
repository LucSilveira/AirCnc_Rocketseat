import axios from 'axios';
// instanciando o axios que ficara responsavel po faciliar as chamadas das apis
// a podermos utiliza-las no front

const api = axios.create({

    baseURL: 'http://localhost:3333',
    // criando nossa base url para simplificar nossa url da api

});

export default api;