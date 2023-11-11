import { Router } from "express";

import {
    getAllPembelian,
    getPembelianById,
    createPembelian,
    deletePembelianById,
} from "../controller/pembelianController.js";

const router = Router()

router.get("/",getAllPembelian);
router.get("/detail/:id",getPembelianById);
router.delete("/detail/:id",deletePembelianById);
router.post("/",createPembelian);


export default router;