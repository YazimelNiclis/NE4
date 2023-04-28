const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.registroUsuario = async (req, res) => {
  const { email, password, nombre } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);
  knex("usuarios")
    .where({ email: email })
    .then((resultado) => {
      if (resultado.length) {
        res
          .status(400)
          .json({ error: "El usuario ya se encuentra registrado" });
        return;
      }
      knex("usuarios")
        .insert({
          email: email,
          password: passwordEncrypt,
          nombre: nombre,
          perfil: "cliente",
        })
        .then((resultado) => {
          res.status(201).json({
            mensaje: "El usuario se ha registrado correctamente",
          });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  knex("usuarios")
    .where({ email: email })
    .then(async (resultado) => {
      if (!resultado.length) {
        //verificamos que el email exista
        res
          .status(404)
          .json({ error: "El usuario no se encuentra registrado" });
        return;
      }
      const validatePassword = await bcrypt.compare(
        //desencripta
        password,
        resultado[0].password
      );
      if (!validatePassword) {
        //la contraseña es incorrecta

        res.status(400).json({
          error: "Email y/o contraseña inválido",
        });
        return;
      }

      //está autenticado para logearse
      const token = jwt.sign(
        {
          name: resultado[0].nombre,
          email: resultado[0].email,
          perfil: resultado[0].perfil,
        },
        process.env.TOKEN_SECRET
      );
      res.status(200).json({
        mensaje: "El usuario se ha logeado correctamente",
        token: token,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
