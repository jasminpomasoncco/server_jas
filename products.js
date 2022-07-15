const Contenedor = require('./contenedor');
const product = new Contenedor('../productos.txt');


const getAllProducts = async(req, res) => {
    try {
        res.json({products: await product.getAll()});
    } catch (error) {
        res.status(404).json({ error: "Ocurrió un error."});
    }
}

const getProductById = async(req, res) => {
    try {
        const productFound = await product.getById(+req.params.id);

        if(!productFound){
            return res.json({
                error: 'Product not found'
            })
        }
        return res.json({
            producto: productFound
        })
    } catch (error) {
        res.status(404).json({
            error: 'Ocurrió un error.'
        })
    }
}


const createProduct = async(req, res) => {
    try {
        const productCreated = await product.save(req.body);
        res.json({
            'product':productCreated
        })
    } catch (error) {
        res.status(404).json({
            error: 'Ocurrió un error.'
        })
    }
}

const updateProduct = async(req, res) => {
    try {
        const message = await product.updateById(+req.params.id, req.body);
        if(!message){
            return res.json({
                error: `Product with ID: ${+req.params.id} not found`
            })
        }
        return res.json({
            message
        });
    } catch (error) {
        res.status(404).json({
            error: 'Something went wrong'
        })
    }
}


const deletePoduct = (req, res) => {
    const id = parseInt(req.params.id);
    try {
        product.deleteById(+req.params.id)
        return res.json({
            message: 'Producto eliminado'
        })
    } catch (error) {
        res.status(404).json({
            error: 'Ocurrió un error.'
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deletePoduct
}