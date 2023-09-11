import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import Routes from "./components/routes.js"

initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.error("Error al conectar la base de datos:", e));

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use(Routes);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
