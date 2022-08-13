const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersModel = require("../db/models/users");

const SignInHandler = async (req, res) => {
  const { email, password } = req.body;
  const findAccount = await usersModel.findOne({ email: email });

  if (!findAccount) {
    return res.status(401).json({ msg: "account is not exists" });
  }

  const checkPassword = bcrypt.compare(
    password,
    findAccount.password,
    (err, hash) => {
      if (err) {
        return res.status(401).json(err);
      }
      try {
        const token = jwt.sign(
          {
            email: findAccount?.email,
            name: findAccount?.name,
            _id: findAccount?._id,
          },
          `${process.env.SECRET}`,
          {
            expiresIn: "1d",
          }
        );

        return res.status(200).json({ result: findAccount, token: token });
      } catch (err) {
        res.status(500).json({ msg: err.message });
      }
    }
  );
};

const SignUpHandler = async (req, res) => {
  const { name, email, password } = req.body;
  const findAccount = await usersModel.findOne({ email: email });

  if (findAccount) {
    return res.status(400).json({ msg: "account is exists" });
  }

  const hashed = bcrypt.hashSync(password, 10);

  const initiated = new usersModel({
    name: name,
    email: email,
    password: hashed,
  });

  try {
    await initiated.save();

    const token = jwt.sign(
      { name: initiated?.name, email: initiated?.email, _id: initiated?._id },
      `${process.env.SECERT}`,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      result: { email: initiated?.email, name: initiated?.name },
      token,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { SignInHandler, SignUpHandler };
