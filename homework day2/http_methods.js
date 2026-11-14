const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTTP Methods Demo</title>
</head>
<body>
    <h1>HTTP Methods</h1>
    <button onclick="sendRequest('GET')">GET</button>
    <button onclick="sendRequest('POST')">POST</button>
    <button onclick="sendRequest('PUT')">PUT</button>
    <button onclick="sendRequest('DELETE')">DELETE</button>
    <pre id="result">Click a button to send a request.</pre>
    <script>
        async function sendRequest(method) {
            const options = { method };
            if (method === 'POST' || method === 'PUT') {
                options.headers = { 'Content-Type': 'application/json' };
                options.body = JSON.stringify({ message: 'Hello from the browser' });
            }

            const response = await fetch('/data', options);
            document.getElementById('result').textContent = await response.text();
        }
    </script>
</body>
</html>`);
});

app.get('/data', (req, resp) => {
    resp.json({ method: 'GET', message: 'Data retrieved' });
});

app.post('/data', (req, resp) => {
    resp.status(201).json({ method: 'POST', data: req.body });
});

app.put('/data', (req, resp) => {
    resp.json({ method: 'PUT', data: req.body });
});

app.delete('/data', (req, resp) => {
    resp.json({ method: 'DELETE', message: 'Data deleted' });
});

app.listen(4000, () => {
    console.log('HTTP methods example running on port 4000');
});
