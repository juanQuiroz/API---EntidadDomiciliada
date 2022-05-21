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

// // mostrar un registro en especifico
// export const getOnePersona = async (req, res) => {
//   try {
//     const persona = await PersonaModel.findAll({
//       where: { id: req.params.id },
//     });

//     res.json(persona);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const createPersona = async (req, res) => {
//   try {
//     const persona = await PersonaModel.create(req.body);
//     res.json({
//       message: "Persona created successfully",
//       blog,
//     });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// export const updatePersona = async (req, res) => {
//   try {
//     await PersonaModel.update(req.body, {
//       where: { id: req.params.id },
//     });
//     res.json({
//       message: "Persona updated successfully",
//     });
//   } catch (error) {}
// };

// export const deletePersona = async (req, res) => {
//   try {
//     await PersonaModel.destroy({
//       where: { id: req.params.id },
//     });
//     res.json({
//       message: "Persona deleted successfully",
//     });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };
