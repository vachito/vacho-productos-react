import { Router } from "express";
import { createProduct, deleteProduct, findById, getProducts, updateProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";
const router = Router();

router.get("/", getProducts);

router.post(
  "/",
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El precio del producto es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a cero"),
  handleInputErrors,
  createProduct,
);

router.get('/:id',
    param('id').isInt().withMessage('Id no valido'),
    handleInputErrors,
    findById)

router.patch('/:id',
    param('id').isInt().withMessage('Id no valido'),
    handleInputErrors,
    updateProduct)

router.delete('/:id',
    param('id').isInt().withMessage('Id no valido'),
    handleInputErrors,
    deleteProduct)

export default router;
 