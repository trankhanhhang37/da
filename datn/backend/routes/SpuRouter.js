const express = require("express");
const router = express.Router();
const spuController = require('../controllers/SpuController');
const { asyncHandler } = require("../helpers");

// router.get('/search/:keySearch', productController.getListSearch)
router.post('/', asyncHandler(spuController.findProductsByAttributes))
router.post('/all_products', asyncHandler(spuController.findAllProducts))

// router.get('/:spu_id', spuController.findProduct)

router.get('/sku/select_variation', asyncHandler(spuController.findOneSku))
router.post('/get_spu_info', asyncHandler(spuController.findOneSpu))
router.post('/findProductDetail', asyncHandler(spuController.findProductDetail))

// router.post('/newproduct', spuController.createProduct)
router.post('/new', asyncHandler(spuController.createSpu))
// router.patch('/:productId', spuController.updateProduct)

router.post('/publish/:id', asyncHandler(spuController.publishProduct))
router.post('/unpublish/:id', asyncHandler(spuController.unPublishProduct))
//query
// router.get('/drafts/all', spuController.getAllDrafts)
// router.get('/published/all', spuController.getAllPublish)
router.post('/findProductsByCategory', asyncHandler(spuController.findProductsByCategory))
router.post('/productbyfilter', asyncHandler(spuController.findProductsByFilter))
module.exports = router