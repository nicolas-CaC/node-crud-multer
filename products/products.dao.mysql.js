import { connection } from "../db/mysql.connection.js"



const getProducts = async () => {
    try {
        const query = `SELECT * FROM productos`
        const [result] = await connection.promise().query(query)
        return result
    }

    catch (err) { return [] }
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