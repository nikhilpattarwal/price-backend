const express = require('express');
const router = express.Router();
const functionController = require('../controllers/functioncontroller'); 

router.get('/test', functionController.testFunction);


module.exports = router;
