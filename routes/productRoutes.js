const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', authenticate, authorize('admin','staff'), productController.createProduct);
router.get('/', authenticate, authorize('admin', 'manager'), productController.getProducts);
router.put('/:id', authenticate, authorize('admin', 'manager'), productController.updateProduct);
router.delete('/:id', authenticate, authorize('admin'), productController.deleteProduct);

module.exports = router;