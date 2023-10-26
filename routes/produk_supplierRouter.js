import { Router } from "express";

import {
    getAllProdukSupplier,
    getProdukSupplierById,
    createProdukSupplier,
    deleteProdukSupplierById,
    updateProdukSupplier
} from "../controller/produkSupplierController.js";

const router = Router()

router.get("/all",getAllProdukSupplier);
router.get("/:id",getProdukSupplierById);
router.delete("/delete/:id",deleteProdukSupplierById);
router.post("/createProdukSupplier",createProdukSupplier);
router.put("/updateProdukSupplier",updateProdukSupplier);


export default router;