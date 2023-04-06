exports.middlewareGlobal = (request, response, next) => {
    if (request.body.cliente) {
        console.log('Entrei no middleware global');
        console.log(`vi que voce postou ${request.body.cliente}`);
    }
    next();
};

exports.outroMiddleware = () =>{
    console.log('Outro middleware');
    next();
};