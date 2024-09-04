const fetchData = require('../utils/fetchData');

const getJKT48Lives = async (req, res) => {
    try {
        const data = await fetchData('https://www.showroom-live.com/api/live/onlives');
        const jkt48Lives = data.onlives.flatMap((genre) =>
            genre.lives.filter((live) => live.room_url_key && live.room_url_key.startsWith('JKT48'))
        );
        res.json(jkt48Lives);
    } catch (error) {
        console.error('Error fetching live data:', error);
        res.status(500).json({ error: 'Failed to fetch live data' });
    }
};

module.exports = {
    getJKT48Lives
};
