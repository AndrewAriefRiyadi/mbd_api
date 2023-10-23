import { Router } from "express";

import {
    getAllSupplier
} from "../controller/supplierController.js";

const router = Router()

router.get("/all",getAllSupplier);


export default router;