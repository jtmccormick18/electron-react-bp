const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const serveStatic=require('serve-static');

const PORT = process.env.PORT || 5000;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static(path.join(__dirname, '/../src','index.html')));
app.use('/image', serveStatic('C:/Temp/pics'));



const db = require("./models");

//pull in API Routes
require('./routes/api-routes')(app);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../src','index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

db.sequelize.authenticate().then(function () {
    app.listen(PORT, function () {
        console.log(`App listening on PORT ${PORT}`);
    });
}).catch(function (err) {
    app.listen(PORT, function () {
        console.log(err);
    })
})