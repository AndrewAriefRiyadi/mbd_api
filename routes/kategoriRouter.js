import { Router } from "express";

import {
    getAllKategori
} from "../controller/kategoriController.js";

const router = Router()

router.get("/all",getAllKategori);


export default router;