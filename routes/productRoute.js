const express = require("express");

const { search_all, search_near, register } = require('../controller/productController')

const router = express.Router();

router.route("/search-all").get(search_all);
router.route("/search-near").get(search_near);
// router.route("/register").get(register);

module.exports = router