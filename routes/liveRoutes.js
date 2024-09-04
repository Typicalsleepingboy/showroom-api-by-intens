const express = require('express');
const { getJKT48Lives } = require('../controllers/liveController');

const router = express.Router();

router.get('/jkt48-lives', getJKT48Lives);

module.exports = router;
