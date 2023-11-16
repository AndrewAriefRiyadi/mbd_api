import { Router } from "express";

import {
    getAllProdukSupplier,
    getProdukSupplierById,
    createProdukSupplier,
    deleteProdukSupplierById,
    updateProdukSupplier
} from "../controller/produkSupplierController.js";

const router = Router()

router.get("/",getAllProdukSupplier);
router.get("/:id",getProdukSupplierById);
router.delete("/:id",deleteProdukSupplierById);
router.post("/",createProdukSupplier);
router.put("/:id",updateProdukSupplier);


export default router;