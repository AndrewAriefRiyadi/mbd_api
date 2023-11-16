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
router.get("/:id",getCustomerById);
router.delete("/:id",deleteCustomerById);
router.post("/",createCustomer);
router.put("/:id",updateCustomer);


export default router;