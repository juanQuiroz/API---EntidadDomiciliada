import ClienteModel from "../models/ClienteModel.js";
import PagosModel from "../models/PagosModel.js";

PagosModel.belongsTo(ClienteModel, {
  foreignKey: "id_cliente",
});
ClienteModel.hasMany(PagosModel, {
  foreignKey: "id_cliente",
});

export const RegisterPayment = async (req, res) => {
  //   const { fecha, monto, empresa, nro_transaccion, id_cliente } = req.body;
  try {
    const pago = await PagosModel.create(req.body);
    res.json({
      message: "Pago realizado con exito",
      pago,
    });
  } catch (error) {
    res.json({ message: "Error procesando el pago", error });
  }
};

// setInterval(() => {
//     try {
//         const cliente = await ClienteModel.create(  {
//             doc_ident: "12345678",
//             nombres: "TEST NAME",
//             apellidos: "TESTA LASTNAME",
//             celular: "123456789",
//             correo: "correo@example.com",
//             domicilio: "MI CASA",
//             suscripcion_activo: true,
//           },);
//         res.json({
//           message: "Usuario created successfully",
//           cliente,
//         });
//       } catch (error) {
//         res.json({ message: error.message });
//       }
// }, [10000]);
