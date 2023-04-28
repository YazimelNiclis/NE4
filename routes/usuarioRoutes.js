const express = require("express");
const routes = express.Router();
const {
  registroUsuario,
  loginUsuario,
} = require("../controllers/usuarioController");

routes.post("/usuario/register", registroUsuario);
routes.post("/usuario/login", loginUsuario);

module.exports = routes;
