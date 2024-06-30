const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(403).json({ error: "Acceso al recurso denegado" });
    return;
  }
  try {
    const verified = jwt.verify(token, "secretToken123123");
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ error: "El token es invalido", mensaje: error });
  }
};
