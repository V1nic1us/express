exports.paginaInicial = (request, response) => {
    response.send(`
        <form action="/" method= "POST">
            <label name= "texto">Nome:</label>
            <input type="text" name= "texto">
            <button>Enviar</button>
        </form>
    `)
}

exports.trataPost = (request, response) =>{
    response.send(`Nome digitado: ${request.body.texto}`);
}