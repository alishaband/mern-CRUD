const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send('home');
});

app.get('/about', (req, resp) => {
    resp.send('about...');
});

app.use((req, resp) => {
    resp.status(404).send('Not found');
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});