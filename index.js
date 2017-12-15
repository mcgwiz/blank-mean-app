const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const routes = require('./app/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cookieParser())

app.use(routes)

app.listen(8080)
console.log('go go go!')

// app.use('/api/animals', function (req, res) {
//     mongodb.connection.conn().db().collection('animals').find().toArray().then(animals => res.json(animals))
// })