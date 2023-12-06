const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/index');


app.use('/api', routes);

app.get('/', (req, res) => {
    res.status(200);
    res.send('DB access obtained')
});


app.listen(port, (error) => {
    if (!error)
        console.log(`Server is successfully running, app is listening on port ${port}`)
    else
        console.log("Error occurred, server cannot start", error);
});
