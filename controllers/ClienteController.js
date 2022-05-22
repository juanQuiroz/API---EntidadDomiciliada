import ClienteModel from "../models/ClienteModel.js";

// Mostrar todos los registros
export const getAllClients = async (req, res) => {
  try {
    const clientes = await ClienteModel.findAll();
    res.json(clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};
