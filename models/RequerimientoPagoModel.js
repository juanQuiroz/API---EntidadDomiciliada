import db from "../database/db.js";
import { DataTypes } from "sequelize";

const RequerimientoPagoModel = db.define(
  "RequerimientosPago",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha: { type: DataTypes.STRING },
    monto: { type: DataTypes.STRING },
    empresa: { type: DataTypes.STRING },
    id_cliente: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  },
);

export default RequerimientoPagoModel;
