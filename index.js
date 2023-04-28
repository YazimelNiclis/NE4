const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const agendaRoutes = require("./routes/agendaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const agenda = require("./data/agenda");
//creamos el servidor con express
const app = express();

//middleware    man in the middle
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// colocar rutas
app.use("/api", agendaRoutes);
app.use("/api", usuarioRoutes);

// levantar el servidor en un puerto
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Servidor levantado en el puerto 8000");
});
