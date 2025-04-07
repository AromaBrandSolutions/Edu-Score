const express = require('express');
const loginAdmin = require('../controllers/adminController');

const router = express.Router();


router.post("/signin", loginAdmin);

module.exports = router;