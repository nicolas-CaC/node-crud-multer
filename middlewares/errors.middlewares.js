const errorData = (req) => ({
    incompleteEndpoint: {
        error_code: 4,
        error_desc: 'Hubo un error en la solicitud a esta ruta',
        endpoint: req.url,
        method: req.method
    },
    productNotExist: {
        error_code: 3,
        error_desc: 'Producto inexistente'
    },
    notConnected: {
        error_code: 10,
        error_desc: 'Problemas con la DB'
    }
})



const errorController = (err, req, res, _) => {

    console.log('ESTAMOS EN EL MIDDLEWARE DE ERRORES')

    const errorCode = parseInt(err.message)
    const error = errorData(req)

    if (errorCode === 3)
        return res.json(error.productNotExist)

    if (errorCode === 4)
        return res.json(error.incompleteEndpoint)

    if (errorCode === 10)
        return res.json(error.notConnected)
}

export const middlewares = {
    errorController
}