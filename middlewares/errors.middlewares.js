const errorController = (err, req, res, _) => {

    console.log('ESTAMOS EN EL MIDDLEWARE DE ERRORES')

    res.json({
        error_code: 4,
        error_desc: 'Hubo un error en la solicitud a esta ruta',
        endpoint: req.url,
        method: req.method
    })
}

export const middlewares = {
    errorController
}