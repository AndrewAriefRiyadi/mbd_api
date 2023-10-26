import { Router } from "express";

import {
    getAllSupplier,
    getSupplierById,
    createSupplier,
    deleteSupplierById,
    updateSupplier
} from "../controller/supplierController.js";

const router = Router()

router.get("/all",getAllSupplier);
router.get("/:id",getSupplierById);
router.delete("/delete/:id",deleteSupplierById);
router.post("/createSupplier",createSupplier);
router.put("/updateSupplier",updateSupplier);


export default router;