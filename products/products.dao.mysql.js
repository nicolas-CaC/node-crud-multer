import mysql from 'mysql2'
import { config } from '../config/mysql.config.js'

const connection = mysql.createConnection(config)

/*
connection.query('DROP TABLE productos')

connection.query(`CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL,
        stock INT NOT NULL,
        image TEXT NOT NULL
    );`)
*/


const getProducts = async () => {
    const query = `SELECT * FROM productos`
    const [result] = await connection.promise().query(query)
    return result
}


const createProduct = async (product) => {
    const { name, price, stock, image } = product
    const fields = [name, price, stock, image]

    const query = `INSERT INTO productos VALUES (NULL,?,?,?,?)`
    const [result] = await connection.promise().query(query, fields)

    return result.affectedRows > 0
}



const updateProduct = async (id, product) => {
    const { name, price, stock } = product
    const fields = [name, price, stock, id]
    const query = `UPDATE productos SET name=?,price=?,stock=? WHERE id=?`
    const [result] = await connection.promise().query(query, fields)
    return result.affectedRows > 0
}



const deleteProduct = async (id) => {
    const query = `DELETE FROM productos WHERE id = ?`
    const [result] = await connection.promise().query(query, id)
    return result.affectedRows > 0
}



export const db = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}