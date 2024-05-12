const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
require("dotenv").config();

const swaggerDefinition = require("./swaggerDefinition");

const options = {
  swaggerDefinition,
  apis: ["./index.js"],
};

const specs = swaggerJsdoc(options);

const app = express();
app.use(express.json());

const port = 3001;

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.post("/", async (req, res) => {
  const film = new Film(req.body);

  console.log(film);

  await film.save();

  res.send(film);
});

app.get("/:id", async (req, res) => {
  const film = await Film.findById(req.params.id);
  res.send(film);
});

app.get("/", async (req, res) => {
  const films = await Film.find();
  res.send(films);
});

app.listen(port, () => {
  mongoose.connect(process.env.MONGODB_URL, {});
  console.log(`Example app listening at http://localhost:${port}`);
});
