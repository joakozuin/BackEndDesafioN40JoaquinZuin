import { Router } from "express";

import { getProducto, postProducto } from "../controladores/productoContr.js";

const router = Router();

router.get("/", getProducto),
router.post("/", postProducto);

export default router;
