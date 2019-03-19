const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

const db = require('./models');

if (process.env.NODE_ENV === "production") {
    app.get('*', function(req,res) {
        res.sendFile(__dirname + "/client/build/index.html")
    });
}

db.sequelize.sync()
    .then(() => app.listen(PORT))
    .catch((err) => console.log(err));