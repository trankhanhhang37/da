const express = require("express");
const router = express.Router();
const brandController = require("../controllers/BrandController");
const { asyncHandler } = require("../helpers");

router.post('', asyncHandler(brandController.createBrand))
router.post('/getBrand', asyncHandler(brandController.getListBrand))


module.exports = router