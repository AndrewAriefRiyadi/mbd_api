import { Router } from "express";

import customer from "./customerRouter.js";
import supplier from "./supplierRouter.js";
import kategori from "./kategoriRouter.js";
import produk_supplier from "./produk_supplierRouter.js";
import pembelian from "./pembelianRouter.js";


const router = Router()

router.use("/customer",customer);
router.use("/supplier",supplier);
router.use("/kategori",kategori);
router.use("/produk_supplier",produk_supplier);
router.use("/pembelian",pembelian);

export default router;