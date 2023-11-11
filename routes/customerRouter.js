import { Router } from "express";

import {
    getAllCustomer,
    getCustomerById,
    createCustomer,
    deleteCustomerById,
    updateCustomer
} from "../controller/customerController.js";

const router = Router()

router.get("/",getAllCustomer);
router.get("/detail/:id",getCustomerById);
router.delete("/detail/:id",deleteCustomerById);
router.post("/",createCustomer);
router.put("/detail/:id",updateCustomer);


export default router;