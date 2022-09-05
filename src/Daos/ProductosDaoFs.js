
import fs from 'fs';

class ProductosDaoFs {
  constructor(rutaFs) {
    this.ruta = rutaFs;
    this.productos = [];
  }


  #readFile=async() =>{
    const prod = await fs.promises.readFile(this.ruta, "utf-8");
    this.productos = JSON.parse(prod);
  }

  #createFile=async() =>{
    const archivo=JSON.stringify(this.productos,null,2)
    await fs.promises.writeFile(this.ruta, archivo); 
  }

  async getAll() {
    await this.#readFile()
    return this.productos;
  }

  async getById(id) {
    await this.#readFile()
    const index = this.productos.findIndex((pro) => pro.id === id);
    return this.productos[index];
  }

  async create(producto) {
    await this.#readFile()
    this.productos.push(producto);
    await this.#createFile()
    return producto;
  }

  async deleteAll() {
    this.productos = [];
    await this.#createFile()
  }

  async deleteById(id) {
    await this.#readFile()
    const index = this.productos.findIndex((pro) => pro.id === id);
    const productoEliminado = this.producto[index];
    await this.#createFile()
    return productoEliminado;
  }

  async updateById(id, infoProducto) {
    await this.#readFile()
    const index = this.productos.findIndex((pro) => pro.id === id);
    const productoActualizado = { ...this.productos[index], ...infoProducto };
    this.producto.splice(index, 1, productoActualizado);
    await this.#createFile()
    return productoActualizado;
  }
}
export default ProductosDaoFs
