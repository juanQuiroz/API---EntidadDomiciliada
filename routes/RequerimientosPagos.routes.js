import express from "express";
import { addPaymentReq } from "../controllers/RequerimientoPagoController.js";

const router = express.Router();

router.post("/", addPaymentReq);
// router.get("/", getAllDerivaciones);
// router.get("/:id", getOneDerivaciones);

export default router;
