import { db } from "./users.dao.mysql.js"
import { adapters } from '../users/users.adapters.js'


const getUsers = async (_, res) => {
    const result = await db.getUsers()
    res.json(result)
}



const createUser = async (req, res) => {
    const user = adapters.parseUser(req.body)
    const result = await db.createUser(user)
    res.json(result)
}



const updateUser = async (req, res) => {
    const { id } = req.params
    const user = adapters.parseUser(req.body)
    const result = await db.updateUser(id, user)
    res.json(result)
}



const deleteUser = async (req, res) => {
    const { id } = req.params
    const result = await db.deleteUser(id)
    res.json(result)
}



export const controllers = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}