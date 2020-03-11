const express = require('express')
const app = express()
const os = require('os')

var ifaces = os.networkInterfaces();

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  // OLD CODE
  //res.send('Hello World!')
  res.render('index', {ip: ifaces['wlo1'][0].address});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
