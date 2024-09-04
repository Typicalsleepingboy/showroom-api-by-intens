const express = require('express');
const liveRoutes = require('./routes/liveRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/api', liveRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
