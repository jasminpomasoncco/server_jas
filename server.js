const { json } = require('express');
const Contenedor = require('./Contenedor');
const products = new Contenedor('./productos.txt');

const app = require('express')();
const PORT = process.env.PORT || 8080;

app.get('/api/productos', async (req, res) => {
    try {
       res.status(200).send(await products.getAll());
    } catch (error) {
        console.error(error);
    }
});

app.get('/api/productos/:id', async (req, res) => {
    try {
        let numero= Number(req.params.id)
            res.json(await products.getById(numero));
        
    } catch (error) {
        console.error("Producto no encontrado");
    }
});

app.post('/api/productos', async (req, res) => {
    try {
        console.log("POST recibido")
        
        products.push(req.body)
        
        res.json("Se agrega nuevo mensaje")   
    } catch (error) {
        console.error("Producto no encontrado");
    }
});


app.put('/api/productos/:id', async (req, res) => {
    try {
        console.log("PUT recibido")
        res.json("Actualizar nuevo mensaje")   
    } catch (error) {
        console.error("Producto no encontrado");
    }
});

app.delete('/api/productos/:id', async (req, res) => {
    try {
        console.log("Delete recibido")
        res.json("Borrando mensaje")    
    } catch (error) {
        console.error("Producto no encontrado");
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

server.on('error', (error) => console.error(error));