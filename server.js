const express = require('express');

const app = express();

app.use(express.static('./dist/bo'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/bo'}),
);

app.listen(process.env.PORT || 8080);