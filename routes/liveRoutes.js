const express = require('express');
const { getJKT48Lives } = require('../controllers/liveController');
const apiLimiter = require('../middlewares/rateLimiter');
const { sendLogToDiscord } = require('../logger/discordlogger');

const router = express.Router();

router.get('/jekatepatlapan', apiLimiter, async (req, res) => {
  try {
    await getJKT48Lives(req, res);

    await sendLogToDiscord(
      'Successfully fetched live data.',
      'Info',
      { method: req.method, url: req.originalUrl }
    );
  } catch (error) {
    console.error('Error fetching live data:', error.message);
    await sendLogToDiscord(
      `Error fetching live data: ${error.message}`,
      'Error',
      { method: req.method, url: req.originalUrl }
    );

    res.status(500).send({ error: 'Failed to fetch live data.' });
  }
});

module.exports = router;
