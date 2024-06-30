const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.registroUsuario = async (req, res) => {
  const { email, password, nombre } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);
};

exports.loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  //está autenticado para logearse
  const token = jwt.sign(
    {
      name: "Yazimel Niclis",
      username: email,
      email: "Yazimelniclis1995@gmail.com",
    },
    "secretToken123123"
  );
  res.status(200).json({
    mensaje: "El usuario se ha logeado correctamente",
    token: token,
  });
};

exports.refreshUsuario = async (req, res) => {
  const { refreshToken } = req.body;
  res.status(200).json({
    mensaje: "Se recibio el token",
    token: refreshToken,
  });
};
