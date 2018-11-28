const express = require('express');
const router = express.Router();

const controller = require('../controller/index');

router.route('/recommend*')
.get(controller.recommend.get);

module.exports = router;
