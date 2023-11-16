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
router.get("/:id",getSupplierById);
router.delete("/:id",deleteSupplierById);
router.post("/createSupplier",createSupplier);
router.put("/:id",updateSupplier);


export default router;