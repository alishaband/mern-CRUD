const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000, () => {
    console.log('Static file server running on port 4000');
});
