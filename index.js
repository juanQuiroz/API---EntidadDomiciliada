import express from "express";
import cors from "cors";
import db from "./database/db.js";

import ClientesRoutes from "./routes/Clientes.routes.js";
import RequerimientosPagosRoutes from "./routes/RequerimientosPagos.routes.js";
import PagosRoutes from "./routes/Pagos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/clientes", ClientesRoutes);
app.use("/api/v1/solicitudespagos", RequerimientosPagosRoutes);
app.use("/api/v1/pagos", PagosRoutes);

try {
  await db.sync({ force: false }).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  });
} catch (error) {
  console.log("Error en Base de Datos: ", error);
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running on port...", PORT);
});
