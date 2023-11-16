import { Router } from "express";

import {
    getAllPembelian,
    createPembelian,
    getPembelianById,
    deletePembelianById
} from "../controller/pembelianController.js";

const router = Router()

router.get("/",getAllPembelian);
router.get("/:id",getPembelianById);
router.post("/",createPembelian);
router.delete("/:id",deletePembelianById);

export default router;