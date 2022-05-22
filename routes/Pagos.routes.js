import express from "express";
import {
  RegisterPayment,
  //   getOneDerivaciones,
} from "../controllers/PagosController.js";

const router = express.Router();

router.post("/", RegisterPayment);
// router.get("/:id", getOneDerivaciones);

export default router;
