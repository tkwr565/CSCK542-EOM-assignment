const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send('DB access obtained')
});

app.listen(port, (error) => {
    if(!error)
        console.log("Server is successfully running, app is listening on port ${port}")
    else
        console.log("Error occurred, server cannot start", error);
});
