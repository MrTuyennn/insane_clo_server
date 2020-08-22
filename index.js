const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// cấu hình bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// kết nối mongoose (database)
const connectDB = require('./config/mongosee');
connectDB();

// import router
const production = require('./routers/product');
app.use(production);

app.get('/', function (req, res) {
  res.send('hello tuyên');
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
