import RequerimientoPagoModel from "../models/RequerimientoPagoModel.js";
import ClienteModel from "../models/ClienteModel.js";

// *** POST ***
export const addPaymentReq = async (req, res) => {
  const { fecha, monto, empresa, dni } = req.body;

  try {
    const cliente = await ClienteModel.findOne({
      where: { doc_ident: dni },
    });

    if (cliente && cliente.suscripcion_activo == true) {
      try {
        const paymentReq = await RequerimientoPagoModel.create({
          fecha,
          monto,
          empresa,
          id_cliente: cliente.id,
        });
        res.json({
          Respuesta_Solicitud: "Procede el pago",
          aceptacion: true,
          cliente,
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      res.json({
        Respuesta_Solicitud: "No procede el pago",
        aceptacion: false,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// *** POST ***
export const getAllPaymentReq = async (req, res) => {
  try {
    const cliente = await ClienteModel.findALL();

    if (cliente && cliente.suscripcion_activo == true) {
      try {
        const paymentReq = await RequerimientoPagoModel.create({
          fecha,
          monto,
          empresa,
          id_cliente: cliente.id,
        });
        res.json({
          Respuesta_Solicitud: "Procede el pago",
          aceptacion: true,
          cliente,
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      res.json({
        Respuesta_Solicitud: "No procede el pago",
        aceptacion: false,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
