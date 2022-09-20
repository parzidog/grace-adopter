const router = require('express').Router();
const {Product} = require('../db')
// GET /api/products
router.get('/', async (req,res,next)=>{
    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (error) {
        next(error)
    }
})
// GET /api/products/:id
router.get('/:id', async(req,res,next)=>{
    try {
        const product = await Product.findByPk(req.params.id)
        res.send(product)
    } catch (error) {
        next(error)
    }
})
//POST /api/products/:id
router.post('/', async(req,res,next)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).send(product)
    } catch (error) {
        next(error)
    }
})
//DELETE /api/products/:id
router.delete('/:id', async(req,res,next)=>{
    try {
        const product = await Product.findByPk(req.params.id)
        await product.destroy()
        res.send(product)
    } catch (error) {
        next(error)
    }
})
//PUT /api/products/:id
router.put('/:id', async(req,res,next)=>{
    try {
        const product = await Product.findByPk(req.params.id);
        product.update(req.body)
        res.send(product)
    } catch (error) {
        next(error)
    }
})
module.exports = router