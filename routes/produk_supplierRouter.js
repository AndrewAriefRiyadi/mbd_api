import { Router } from "express";

import {
    getAllProdukSupplier
} from "../controller/produk_supplierController.js";

const router = Router()

router.get("/all",getAllProdukSupplier);


export default router;