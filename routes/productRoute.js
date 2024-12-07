const express = require('express');
const itemController = require('../controller/itemController');

const router = express.Router();

router
  .route('/')
  .get(itemController.getAllProducts)
  .post(itemController.createNewProduct);

router
  .route('/:id')
  .get(itemController.getOneProduct)
  .delete(itemController.deleteProduct);
// .patch(itemController.updateProduct)

router.post(
  '/upload',
  itemController.uploadProdImage,
  itemController.createProductWithImage,
);

router.patch(
  '/:id',
  itemController.uploadProdImage,
  itemController.updateProductWithImage,
);

module.exports = router;
