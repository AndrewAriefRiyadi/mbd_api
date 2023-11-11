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
router.get("/detail/:id",getProdukSupplierById);
router.delete("/detail/:id",deleteProdukSupplierById);
router.post("/",createProdukSupplier);
router.put("/detail/:id",updateProdukSupplier);



export default router;