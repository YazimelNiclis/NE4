const express = require("express");
const routes = express.Router();
const {
  registroUsuario,
  loginUsuario,
  refreshUsuario,
} = require("../controllers/usuarioController");

routes.post("/usuario/register", registroUsuario);
routes.post("/usuario/login", loginUsuario);
routes.post("/usuario/refreshToken", refreshUsuario);

module.exports = routes;
