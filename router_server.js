const express = require("express");
const Contenedor = require('./Contenedor');
const products = new Contenedor('./productos.txt');
const router_server = express.Router();


router_server.get("/", (req, res) => {
    try {
        res.status(200).send(await products.getAll());
    } catch (error) {
        console.error(error);
    }
});

router_server.get('/:id', async (req, res) => {
    try {
        let numero= Number(req.params.id)
            res.json(await products.getById(numero));
    } catch (error) {
        res.status(404).json({ error: "Producto no encontrado "});
    }
});

router_server.post('/', async (req, res) => {
    try {
        console.log("POST recibido")   
        products.push(req.body);
  res.json({
    mensaje: "se agrego correctamente el producto con id: " + req.body.id,
  });  
    } catch (error) {
        console.error(e);
    }
});

router_server.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, price, url } = req.body;
    try {
        console.log("PUT recibido")
        
        let buscar_id = products.find((productos) => productos.id == id);
    if (parseInt(buscar_id.id) === parseInt(id)) {
        products.splice(buscar_id.id - 1, 1, req.body);
      res.json({ products });
    } else {
        res.json("Error de Ingreso");
      }
     } catch (error) {
        console.error("Producto no encontrado");
    }
});

router_server.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        console.log("Delete recibido")
        products = products.filter((productos) => productos.id !== id);
        res.json(products);
        res.json("Borrando mensaje")    
    } catch (error) {
        console.error("Producto no encontrado");
    }
});