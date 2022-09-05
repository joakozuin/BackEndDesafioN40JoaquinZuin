//import productoModel from '../Daos/ProductosDaoMem.js'

import productosDaoFs from '../Daos/ProductosDaoFs.js'
const ruta='./src/BD/productos.json'
const productoModel= new productosDaoFs(ruta)

export const agregarProducto=async (producto)=>{ 
   
    await productoModel.create(producto)
}
export const listarProductos=async ()=>{ 
    return await productoModel.getAll()
}