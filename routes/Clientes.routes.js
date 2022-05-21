import express from "express";
import {
  getAllClients,
  //   getOneDerivaciones,
} from "../controllers/ClienteController.js";

const router = express.Router();

router.get("/", getAllClients);
// router.get("/:id", getOneDerivaciones);

export default router;
