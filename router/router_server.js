const { Router } = require('express');
const productos = require('../products');

const router_server= Router()

router_server.get('/', productos.getAllProducts)
router_server.get('/:id/', productos.getProductById)
router_server.post('/', productos.createProduct)
router_server.put('/:id', productos.updateProduct)
router_server.delete('/:id', productos.deletePoduct)

module.exports = router_server