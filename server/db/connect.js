const mongoose = require("mongoose");

const uri = `${process.env.MONGO_URI}`;

const connectToDb = async (app) => {
  mongoose
    .connect(uri)
    .then(() =>
      app.listen(process.env.PORT, () =>
        console.log(`run on port ${process.env.PORT}`)
      )
    )
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
