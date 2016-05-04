var express = require('express');
var app = express();
app.use(express.static('public'));

var rt =111;

app.get('/', function (req, res) {
  res.send("<h1>Well Integrity App</h1>");
});

app.get('/api/v1/data', function (req, res) {
  const data = {d:[100,101,102,103,104,105,106,107,109,110]};
  res.send(data);
});

app.get('/api/v1/rt-data', function (req, res) {
  const data = {d:rt++};
  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});