const express = require('express')
const app = express()
const os = require('os')

var ifaces = os.networkInterfaces();
var ips = []
for(dev in ifaces)
{
  ips.push(ifaces[dev][0].address)
}

console.log(ips)
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  // OLD CODE
  //res.send('Hello World!')
  res.render('index', {ips: ips});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
