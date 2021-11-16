const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/index'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
