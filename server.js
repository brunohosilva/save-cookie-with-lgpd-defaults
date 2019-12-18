const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/src/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/src/index.html');
});

app.post('/saveCookie', function (req, res) {

})

app.listen(4000, function () {
  console.log('Server listening on port 4000!');
});