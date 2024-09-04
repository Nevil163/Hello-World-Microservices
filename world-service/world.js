const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/world', (req, res) => {
    res.send('World');
});

app.listen(PORT, () => {
    console.log(`World service is running on port ${PORT}`);
});
