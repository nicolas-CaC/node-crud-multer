import { db } from "./products.dao.mysql.js"
import { adapters } from "./products.adapter.js"

const getProducts = async (req, res) => {
    const result = await db.getProducts()
    res.json(result)
}


const createProduct = async (req, res) => {
    const product = adapters.productAdapter(req.body, req.file)
    const result = await db.createProduct(product)
    result
        ? res.redirect('/')
        : res.redirect('/')
}



const incomplete = (req, res) => {
    throw Error()
}



const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = adapters.productAdapter(req.body)
    const result = await db.updateProduct(id, product)
    res.json(result
        ? { error_code: 0, desc: 'Producto modificado correctamente' }
        : { error_code: 3, error_desc: 'Producto inexistente' })
}



const deleteProduct = async (req, res) => {
    const result = await db.deleteProduct(req.params.id)
    res.json(result
        ? { error_code: 0, desc: 'Producto borrado correctamente' }
        : { error_code: 3, error_desc: 'Producto inexistente' })
}



export const controllers = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    incomplete
}