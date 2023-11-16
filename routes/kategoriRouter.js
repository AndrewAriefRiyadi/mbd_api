import { Router } from "express";

import {
    getAllKategori,
    getKategoriById,
    createKategori,
    updateKategori,
    deleteKategoriById
} from "../controller/kategoriController.js";

const router = Router()

router.get("/",getAllKategori);
router.get("/:id",getKategoriById);
router.delete("/:id",deleteKategoriById);
router.post("/",createKategori);
router.put("/:id",updateKategori);


export default router;