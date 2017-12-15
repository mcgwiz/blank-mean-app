const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

module.exports = {
    get: _get,
    post: _post
}

function _get(req, res) {
    MongoClient.connect(process.env.MONGODB_URL)
        .then(conn => {
            return conn.db('sabioc42').collection('profiles').count()
        }).then(count => {
            res.send('Hellooooooo '+req.cookies.name + '. there are ' + count + ' profiles.')
        })
        .catch()
}

function _post(req, res) {
    MongoClient.connect(process.env.MONGODB_URL)
        .then(conn => {
            return conn.db('sabioc42').collection('profiles').insert(req.body)
        })
        .then(status => res.json({ successful:true}))

}