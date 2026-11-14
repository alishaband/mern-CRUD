const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, resp, next) => {
    console.log({ method: req.method, url: req.url });
    next();
});

app.get('/', (req, resp) => {
    resp.send('Middleware example');
});

app.post('/data', (req, resp) => {
    resp.json({ received: req.body });
});

app.listen(4000, () => {
    console.log('Middleware example running on port 4000');
});
