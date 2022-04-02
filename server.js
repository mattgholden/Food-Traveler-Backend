require ('dotenv').config()
const express = require('express')
const app = express()
app.set('port', process.env.PORT || 8000)
const SESSION_SECRET = process.env.SESSION_SECRET
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
const toEatListController = require('./controllers/toEatList')
const sessionController = require('./controllers/session')


app.use(cors())
//options to pass to cors
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use('/toEatList', toEatListController)
app.use('/session', sessionController)

app.listen(app.get('port'), () => {
    console.log(`Food Travels on port, ${app.get('port')}, 🍕 ✅`)
})
