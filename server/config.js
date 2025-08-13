import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import '../db/config.js'

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  // Agregar metodos:

  // Middlewares
  middlewares() {
    this.app.use(cors()); // Permite tener conecciones remotas
    this.app.use(express.json()); // Interpreta los datos json que llegan en las solicitudes
    this.app.use(morgan("dev"));
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(`${__dirname}/../public`));
    console.log(`${__dirname}/../public`);
  }

  // Escuchar el puerto
  listen() {
    this.app.listen(this.port, () => {
      console.info(
        `El servidor se esta ejecutnado en prueba2: http://localhost:${this.port}`
      );
    });
  }
}
