const express = require("express");
const routes = express.Router();
const {
  obtenerTelefonos,
  obtenerCantidad,
  error,
  obtenerTelefonoPorId,
  obtenerTelefonoPorIdBody,
  obtenerTelefonoPorIdQuery,
  insertTelefono,
} = require("../controllers/agendaControllers");
const { validarId } = require("../middlewares/agenda/agenda");
const {
  idValidator,
  idValidatorBody,
} = require("../middlewares/validators/agenda");
const { runValidation } = require("../middlewares/validators");

//rutas y recursos
routes.get("/telefonos", obtenerTelefonos);
routes.get("/cantidadNumeros", obtenerCantidad);

//agregar middleware de body
routes.post(
  "/buscar/telefono",
  idValidatorBody,
  runValidation,
  obtenerTelefonoPorIdBody
);
//agregar middleware de query params
routes.get("/buscar/query", obtenerTelefonoPorIdQuery);

routes.get(
  "/buscar/:id",
  idValidator,
  runValidation,
  validarId,
  obtenerTelefonoPorId
);

routes.post("/telefonos", insertTelefono);

routes.get("/error", error);
module.exports = routes;
