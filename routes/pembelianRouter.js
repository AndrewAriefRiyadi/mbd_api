import { Router } from "express";

import {
    getAllPembelian
} from "../controller/pembelianController.js";

const router = Router()

router.get("/all",getAllPembelian);


export default router;