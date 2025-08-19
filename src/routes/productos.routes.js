import { Router } from "express";
import { crearProducto, leerProductos, leerProductosPorId,borrarProductosPorId, test, editarProductosPorId } from "../controllers/productos.controllers.js";

const router = Router();

// Get, Post, Put/Patch, Delete
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProducto)
router.route('/:id').get(leerProductosPorId).delete(borrarProductosPorId).put(editarProductosPorId)

export default router;