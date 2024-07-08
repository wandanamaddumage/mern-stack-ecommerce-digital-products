import express from "express";
import { Product } from "../models/productModel.js";

const router = express.Router();

//CREATE NEW PRODUCT ROUTE
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.priceInCents ||
      !request.body.image ||
      !request.body.category
    ) {
      return response.status(400).send({
        message: "Required fields are missing",
      });
    }

    const newProduct = {
      name: request.body.name,
      priceInCents: request.body.priceInCents,
      description: request.body.description,
      image: request.body.image,
      category: request.body.category,
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET PRODUCT ROUTE

//DELETE PRODUCT ROUTE

//UPDATE PRODUCT ROUTE

export default router;
