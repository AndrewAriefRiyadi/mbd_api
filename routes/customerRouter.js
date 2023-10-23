import { Router } from "express";

import {
    getAllCustomer,
    createCustomer,
    updateCustomer
} from "../controller/customerController.js";

const router = Router()

router.get("/all",getAllCustomer);
router.post("/createCustomer",createCustomer);
router.put("/updateCustomer",updateCustomer);


export default router;