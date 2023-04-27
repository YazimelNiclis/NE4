/* const agenda = require("../data/agenda"); */
const knex = require("../config/knexfile");

exports.obtenerTelefonos = async (req, res) => {
  //CRUD,  Create, Read, Update y Delete

  try {
    const resultado = await knex.select("*").from("agenda");
    res.status(200).json({ agenda: resultado });
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

exports.obtenerTelefonoPorId = (req, res) => {
  //:id
  const id = Number(req.params.id);
  const resultado = agenda.find((telefono) => {
    return telefono.id === id;
  });
  res.status(200).json({ telefono: resultado });
};

exports.obtenerTelefonoPorIdQuery = (req, res) => {
  //?id=2
  const id = Number(req.query.id);
  const resultado = agenda.find((telefono) => {
    return telefono.id === id;
  });
  if (resultado) {
    res.status(200).json({ telefono: resultado });
  } else {
    res
      .status(404)
      .json({ mensaje: "No se ha encontra un registro con ese id" });
  }
};

exports.obtenerTelefonoPorIdBody = (req, res) => {
  const { id } = req.body; // {id: 2, nombre: yazimel, apellido:}
  const resultado = agenda.find((telefono) => {
    return telefono.id === id;
  });
  if (resultado) {
    res.status(200).json({ telefono: resultado });
  } else {
    res
      .status(404)
      .json({ mensaje: "No se ha encontra un registro con ese id" });
  }
};
