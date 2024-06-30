const agenda = require("../data/agenda");

exports.obtenerTelefonos = async (req, res) => {
  //CRUD,  Create, Read, Update y Delete

  /*  if (req.user.perfil == "cliente") {
    res
      .status(401)
      .json({
        error: "No posee los permisos necesarios para acceder al recurso",
      });
    return;
  } */
  try {
    res.status(200).json({ agenda: agenda });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  /*   knex
    .select("*")
    .from("agenda")
    .then((resultado) => {
      res.status(200).json({ agenda: resultado });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    }); */

  /* res.json({ agenda: agenda }); */
};

exports.obtenerCantidad = (req, res) => {
  res.status(200).json({ cantidad: agenda.length });
};

exports.error = (req, res) => {
  res.status(400).json({ mensaje: "error" });
};

exports.obtenerTelefonoPorId = async (req, res) => {
  res.status(200).json({ telefono: "ok" });
};

exports.insertTelefono = async (req, res) => {
  //body
  const { id, name, number } = req.body;

  res
    .status(200)
    .json({ mensaje: "El registro se inserto correctamente en la bd" });
};

exports.obtenerTelefonoPorIdQuery = (req, res) => {
  //?id=2

  res.status(200).json({ telefono: "ok" });
};

exports.obtenerTelefonoPorIdBody = (req, res) => {
  res.status(200).json({ telefono: "ok" });
};
