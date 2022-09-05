import primeraConexion from '../modelo/singletonClass.js'

export function obtenerHora(){
    
  const instancia=primeraConexion.getInstancia()
  return instancia.obtenerHora()

}
  