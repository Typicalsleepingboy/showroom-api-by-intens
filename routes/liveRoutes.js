const express = require('express');
const { getJKT48Lives } = require('../controllers/liveController');
const apiLimiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/jekatepatlapan', apiLimiter, getJKT48Lives);

module.exports = router;
