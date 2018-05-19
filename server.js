const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 5000
app.use(express.static('../portfolio'))
app.use(express.static('/img'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function() {
    console.log('App running on port ' + port + '!')
})