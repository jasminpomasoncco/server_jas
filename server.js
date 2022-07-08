const { json } = require('express');
const router_server = require("./router_server.js");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/productos", router_server);

const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

server.on('error', (error) => console.error(error));