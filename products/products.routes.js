import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../products/products.controllers.js'

const router = Router()

router
    .use(middlewares.routes.checkRoute)

    .get('/',
        controllers.getProducts)

    .post('/',
        middlewares.files.uploadImage.single('image'),
        controllers.createProduct)

    .put('/',
        controllers.incomplete)

    .put('/:id',
        middlewares.routes.checkParams,
        controllers.updateProduct)

    .delete('/:id',
        middlewares.routes.checkParams,
        controllers.deleteProduct)

export default router
