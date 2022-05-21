import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ClienteModel = db.define(
  "cliente",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    doc_ident: { type: DataTypes.STRING },
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    celular: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    domicilio: { type: DataTypes.STRING },
    suscripcion_activo: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: false,
  },
);

export default ClienteModel;
