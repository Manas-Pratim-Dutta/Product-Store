import express from 'express'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.js';

const router = express.Router();

//Create
router.post("/", createProduct);
//Read
router.get("/", getProducts );
//Update
router.put("/:id", updateProduct);
//Delete
router.delete("/:id", deleteProduct);



export default router