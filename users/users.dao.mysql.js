import mysql from 'mysql2'
import { config } from '../config/mysql.config.js'
import { helpers } from './users.helpers.js'


const table = 'usuarios'
const connection = mysql.createConnection(config)



const getUsers = async () => {
    const query = `SELECT * FROM ${table}`
    const [result] = await connection.promise().query(query)
    return result
}



const createUser = async (user) => {

    let query = `SELECT id FROM ${table} ORDER BY id DESC LIMIT 1;`
    const [lastUsers] = await connection.promise().query(query)
    const id = ++lastUsers[0].id

    query = `INSERT INTO ${table} VALUES(?,?,?)`
    const [result] = await connection.promise().query(query, [id, user.name, user.age])
    return helpers.isSuccessfulOperation(result)
}



const updateUser = async (id, { name, age }) => {
    const query = `UPDATE ${table} SET name = '${name}', age = ${age} WHERE id = ${id}`
    const [result] = await connection.promise().query(query)
    return helpers.isSuccessfulOperation(result)
}



const deleteUser = async (id) => {
    const query = `DELETE FROM ${table} WHERE id = ${id}`
    const [result] = await connection.promise().query(query)
    return helpers.isSuccessfulOperation(result)
}


export const db = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}