import { Router } from "express";

import {
    getAllCustomer,
    getCustomerById,
    createCustomer,
    deleteCustomerById,
    updateCustomer
} from "../controller/customerController.js";

const router = Router()

router.get("/all",getAllCustomer);
router.get("/:id",getCustomerById);
router.delete("/delete/:id",deleteCustomerById);
router.post("/createCustomer",createCustomer);
router.put("/updateCustomer",updateCustomer);


export default router;