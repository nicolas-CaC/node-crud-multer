const checkParams = (req, res, next) => {

    req.params.id = parseInt(req.params.id)

    if (isNaN(req.params.id))
        return res.json({
            error_code: 1,
            error_desc: 'Formato de id inválido'
        })

    next()
}



const checkRoute = (req, res, next) => {

    if (req.method === 'GET' && req.url.length > 1)
        return res.json({
            error_code: 5,
            error_desc: 'Ruta aún no implementada',
            endpoint: req.originalUrl,
            method: req.method
        })

    next()
}



export const middlewares = {
    checkParams,
    checkRoute
}