const express = require('express');
const router = express.Router();
const delara = require('../controller/geralynController');

router.get('/', delara.index);
router.get('/shop', delara.shop);
router.get('/aboutUs', delara.aboutUs);
router.get('/services', delara.services);
router.get('/blog', delara.blog);
router.get('/contactUs', delara.contactUs);

module.exports = router;


