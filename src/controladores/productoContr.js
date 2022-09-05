//import  {listarProductos,agregarProducto} from '../negocio/productoNeg.js'
import  {listarProductos,agregarProducto} from '../Daos/ProductosFactory.js'
import { activarDTO } from '../DTO/ProductoDTO.js'

export const getProducto=async (req, res) => {

    let productos=await listarProductos()

    //console.log(productos)
    res.render('productos',{productos})

 } 

 /* export const getProductos = async (req, res) => {
   try {
     let productos = await listarProductos();
     console.log(productos);
     res.status(201).json({ productos,
                            error:false });
   } catch (error) {
      res.status(400).json({ productos,
                             error:ture });
   }
 };  */

export const postProducto = async (req, res) => {

  let prod = req.body;

  console.log('1-Dentro controlador')
  console.log(prod)

  //Usa metodo singleton para obtener
  // la hora de inicio del servidor
  //---------------------------------
  //const hora={hora:obtenerHora()}

  //let id={id:new Date().toDateString};
  //let producto={...prod,...id}
  //producto={...producto,...hora}

  //Metodo DTO
  //-----------
  const producto=activarDTO(prod);

 console.log('2-Dentro controlador')
  console.log(producto)
  await agregarProducto(producto);
  
  res.redirect("/producto");
};
