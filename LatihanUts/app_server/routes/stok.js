var express = require('express');
var router = express.Router();

const stkController = require('../controllers/stok');

router.get("/", stkController.index); //list mahasiswa
router.post("/insert", stkController.insert); //insert mahasiswa


module.exports = router;