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
    console.log(req.body)
    // 2- Validar los datos
    // 3- Agregar el producto a la BD
    // 4- Devolver un mensaje de confirmacion
  }
  catch (error) {
    console.error(error)
  }
}

// Aagregar funcion para editar productos