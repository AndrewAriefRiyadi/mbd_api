import { Router } from "express";

import {
    getAllSupplier,
    getSupplierById,
    createSupplier,
    deleteSupplierById,
    updateSupplier
} from "../controller/supplierController.js";

const router = Router()

router.get("/",getAllSupplier);
router.get("/detail/:id",getSupplierById);
router.delete("/detail/:id",deleteSupplierById);
router.post("/",createSupplier);
router.put("/detail/:id",updateSupplier);


export default router;