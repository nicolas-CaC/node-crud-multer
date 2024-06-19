import { db } from "./products.dao.mysql.js"
import { messages } from "./products.data.js"
import { adapters } from "./products.adapter.js"


const getProducts = async (_, res) => {
    const result = await db.getProducts()
    res.json(result)
}


const createProduct = async (req, res) => {
    const product = adapters.productAdapter(req.body, req.file)
    const result = await db.createProduct(product)
    result ? res.redirect('/') : res.redirect('/')
}



// Atención al control de errores: Función síncrona
const incomplete = (req, res) => {
    throw Error(4)
}



/*
Atención al control de errores: Función Asíncrona 
necesita next, como si fuese un middleware
*/
const updateProduct = async (req, res, next) => {
    const { id } = req.params
    const product = adapters.productAdapter(req.body)
    const result = await db.updateProduct(id, product)
    result.message === '0' ? res.json(messages.upd) : next(result)
}



const deleteProduct = async (req, res, next) => {
    const result = await db.deleteProduct(req.params.id)
    result.message === '0' ? res.json(messages.del) : next(result)
}



export const controllers = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    incomplete
}