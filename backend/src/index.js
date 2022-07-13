const mongoose = require("mongoose");
const express  = require("express");
const routes   = require("./routes/question");

const { PORT, MONGODB_URI } = process.env;

// Add `epur()` routine to string
String.prototype.epur = function () {
  return this?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

// Connect to MongoDB's database and to Discord's API
(async () => {
  try {
    const uri  = MONGODB_URI ?? "mongodb://localhost/pytoquiz";
    const port = PORT ?? 3000;
    await mongoose.connect(uri);
    console.log(`Connected to database at ${uri}`);
    const app = express();
    app.use(routes);
    app.listen(port, () => console.log(`API ready on localhost:${port}`));
  } catch (err) {
    console.error(err) ?? process.exit(1);
  }
})();
