const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Hello service is running on port ${PORT}`);
});
