/* const agenda = require("../data/agenda"); */
const knex = require("../config/knexfile");

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
    const resultado = await knex("agenda");
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

exports.obtenerTelefonoPorId = async (req, res) => {
  //:id
  const id = Number(req.params.id);
  try {
    const resultado = await knex.select("*").from("agenda").where("id", id);
    res.status(200).json({ telefono: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.insertTelefono = async (req, res) => {
  //body
  const { id, name, number } = req.body;
  try {
    const verificacionId = await knex
      .select("*")
      .from("agenda")
      .where("id", id);

    if (verificacionId.length) {
      res.status(400).json({ error: "Ya existe un registro con ese id" });
      return;
    }
    const resultado = await knex("agenda").insert({
      id: id,
      name: name,
      number: number,
    });
    res
      .status(200)
      .json({ mensaje: "El registro se inserto correctamente en la bd" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
