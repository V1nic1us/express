/*
        Post    Get   Put        Delete
CRUD -> Create, Read, Update,    Delete
        Criar   Ler   Atualizar  Apagar

parmms: profiles/1
query:  profiles/?chave1=valor1&chave2=valor2&chave3=valor3
body:   app.post


*/
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

app.use(express.urlencoded( { extended : true } ));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')
app.use(routes);

app.listen(3000, () => {
    console.log('Iniciando Servidor http://localhost:3000');
});

// route.get('/testes/:idUsuario?/:parametro?', (request, response) => {
//     // if (!request.params) response.send('Erro na aplicação')
//     console.log(request.params);
//     console.log(request.query);
//     response.send(request.params);
// })

// route.post('/', (request, response) => {
//     console.log(response.body);
//     response.send(`Formulario recebido com sucesso: ${request.body.texto}`)
// })

// route.get('/contato', (request, response) => {
//     response.send('Entrou em contato')
// })