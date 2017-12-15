const express = require('express')
const router = express.Router()
const aRouter = require('./aRouter')
const path = require('path')
const contentPath = path.join(__dirname, '../../content')

module.exports = router

// router.get('/', function (req, res) {
//     res.send('<!DOCTYPE><html ng-app="awesome"><head></head><body><h1>hurl</body></html>')
// })

router.use('/a', aRouter)

// route to handle all angular client state URL requests (regex matches URL with no file extension, query OK)
router.get(/^\/([^\.\?]*|[^\?]*\/[^\.\?]*)(\?.*)?$/, (req, res, next) => {
    let file = "index.html"

    res.sendFile(file, {
        root: contentPath
    })
})

router.get('*', express.static(contentPath, {
    fallthrough: false
}))