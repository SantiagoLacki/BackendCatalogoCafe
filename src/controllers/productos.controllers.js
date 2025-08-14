import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send('Primera prueba desde el backend');
}

export const leerProductos = (req, res) => {

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

// Aagregar funcion para editar productos