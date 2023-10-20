// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3030;

// const ruta = `${__dirname}/public/`

// // Rutas pagina
// app.get("/", (req, res) => {
//   res.sendFile( ruta + "index.html");
// });
// app.get("/categoria",(req, res) => {
//   res.sendFile( ruta + "Categoria.html");
// });
// app.get("/date=:id", (req, res) => {
//   res.sendFile( ruta + "id.html");
// });

// // Carpetas en el proyecto
// app.use(express.static( ruta + "css"));
// app.use(express.static( ruta + "src"));
// app.use(express.static( ruta + "media"));

// // Manejo de errores 404
// app.use((req, res) => {
//   res.status(404).sendFile(ruta + "paginaError.html");
// });

// // Puerto del express
// app.listen(PORT);




const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const ruta = `${__dirname}/public/`;

// Rutas pagina
app.get("/", (req, res) => {
  res.sendFile(ruta + "index.html");
});
app.get("/categoria", (req, res) => {
  res.sendFile(ruta + "Categoria.html");
});
app.get("/date=:id", (req, res) => {
  res.sendFile(ruta + "id.html");
});

// Carpetas en el proyecto
app.use(express.static(ruta + "css"));
app.use(express.static(ruta + "src"));
app.use(express.static(ruta + "media"));

// Middleware para manejar errores 404
app.use((req, res) => {
  res.status(404);
  res.sendFile(ruta + "paginaError.html");
});

// Puerto del express
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
