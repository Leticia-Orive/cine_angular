const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Puedes cambiar el número de puerto según tus necesidades

app.use(bodyParser.json());

app.post("/pelicula", (req, res) => {
  const pelicula = req.body;

  // Aquí puedes implementar la lógica para guardar la película en tu base de datos o en algún otro lugar

  // Por ejemplo, puedes almacenar la película en un array de películas en memoria
  peliculas.push(pelicula);

  res.status(200).json({ mensaje: "Película guardada exitosamente" });
});

app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
