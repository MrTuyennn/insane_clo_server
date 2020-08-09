const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const production = require('../controllers/product')
router.post("/creat-data",production.create_product);
router.post("/update-data/:id",production.update_product);
router.post("/delete-data/:id",production.delete_product);

const product = require('../apis/product')
router.get("/product-data",product.getData_product);
router.get("/product-limit",product.getData_limit)
router.get("/product-limit-data",product.getData_limit_data)

const user = require('../controllers/user')
router.post("/singup",user.SingUp)
router.post("/singin",user.SingIn)
router.post("/update_user/:id",user.update_user)
router.post("/change_passwor/:id",user.change_password)
router.get("/getdata-user/:id",user.get_user_id)
router.get("/data-user",user.getData_user)

module.exports = router;