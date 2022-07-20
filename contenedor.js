const fs = require('fs');

class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }

    async save(product) {
        try {
            let data = await this.readFile();
            product.id = this.buildId(data);

            data.push(product);

            this.writeFile(data);

            return product.id;
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id) {
        let data = await this.readFile();
        data = data.filter((product) => product.id === id);
        return data.length == 0 ? null : data;
    }

    getAll() {
        return this.readFile();
    }

    async deleteById(id) {
        let data = await this.readFile();
        this.writeFile(data.filter((product) => product.id !== id));
    }

    async deleteAll() {
        this.writeFile([]);
    }

    async readFile() {
        
        return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'));
    }

    async writeFile(data) {
        const str= JSON.stringify(data)
        await fs.promises.writeFile(this.filename, str);
    }

    buildId(data) {
        try {
            if (data.length === 0) {
                return 1;
            } else {
                data.sort((a, b) => (a.id > b.id ? 1 : -1));
                return data[data.length - 1].id + 1;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Contenedor;