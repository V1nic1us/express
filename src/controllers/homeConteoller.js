exports.paginaInicial = (request, response) => {
    response.render('index')
}

exports.trataPost = (request, response) =>{
    response.send(`Nome digitado: ${request.body.texto}`);
}