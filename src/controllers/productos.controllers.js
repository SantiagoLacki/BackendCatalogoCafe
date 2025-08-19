import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send('Primera prueba desde el backend');
}

export const leerProductos = async (req, res) => {
  try {
    // Buscar todos los productos
    const listaProductos = await Producto.find()
    // Enviar la respuesta al front
    res.status(200).json(listaProductos)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({mensaje:'Error al leer los productos'})
  }
}

// Agregar funcion para crear productos
export const crearProducto = async (req,res) => {
  try {
    // 1- Recibir el objeto que tengo que agregar a la BD
    // console.log(req.body)
    // 2- Validar los datos
    // 3- Agregar el producto a la BD
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    // 4- Devolver un mensaje de confirmacion
    res.status(201).json({mensaje: 'Producto creado con exito'});
  }
  catch (error) {
    console.error(error)
    res.status(500).json({mensaje: 'Error al crear producto'});
  }
}

export const leerProductosPorId = async (req,res) => {
  try {
    // 1- Obtener el parametro del rrquest
    // console.log(req.params)
    // console.log(req.params.id)
    // 2- Pedir a mongoose que encuentre el producto con tal id
    const productoBuscado = await Producto.findById(req.params.id)
    if (!productoBuscado) {
      return res.status(404).json({mensaje: 'Producto no encontrado.'});
    }
    // 3- Contestar al front
    res.status(200).json(productoBuscado);
  }
  catch (error){
    console.error(error);
    res.status(500).json({mansaje: 'Error al obtener el producto.'})
  }
}

export const borrarProductosPorId = async (req,res) => {
  try {
    // 1- Buescar el producto por el id y luego borrarlo
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id)
    if (!productoEliminado) {
      return res.status(404).json({mensaje: 'Producto no encontrado.'});
    }
    // 2- responder al front
    res.status(200).json({mensaje: 'Producto eliminado exitosamente.'})
  }
  catch (error) {
    console.error(error)
    res.status(500).json({mensaje: 'Error al eliminar el producto.'})
  }
}

// Aagregar funcion para editar productos