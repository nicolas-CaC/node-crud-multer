import { Router } from 'express'
import { controllers } from '../users/users.controllers.js'


const router = Router()

router
    .get('/', controllers.getUsers)
    .post('/', controllers.createUser)
    .put('/:id', controllers.updateUser)
    .delete('/:id', controllers.deleteUser)

export default router
