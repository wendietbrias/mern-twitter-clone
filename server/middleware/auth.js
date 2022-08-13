const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const verify = jwt.verify(token, `${process.env.SECRET}`);

  if (verify) {
    req.headers.userId = verify?._id;
    return next();
  } else {
    return res.status(401).json({ msg: "invalid token included" });
  }
};

module.exports = AuthMiddleware;
