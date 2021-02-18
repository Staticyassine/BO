const express = require('express');

const app = express();

app.use(express.static('./dist/argon-design-system-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/argon-design-system-angular'}),
);

app.listen(process.env.PORT || 8080);