const agenda = require("../../data/agenda");

exports.validarId = (req, res, next) => {
  const id = Number(req.params.id);
  const resultado = agenda.find((telefono) => {
    return telefono.id === id;
  });
  if (resultado) {
    next();
  } else {
    res
      .status(404)
      .json({ mensaje: "No se ha encontra un registro con ese id" });
  }
};

exports.validarIdQuery = (req, res, next) => {};

exports.validarIdBody = (req, res, next) => {};
