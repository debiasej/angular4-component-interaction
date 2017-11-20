const express = require('express')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

require('./models/user')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')

const mongoseConfig = keys.mongoose
mongoose.connect(mongoseConfig.mongoURI, mongoseConfig.opts)
  .then(
    () => console.log('A connection to MongoDB has been successfully established'),
    (err) => console.error('[Moongose Error]: Error establishing MongoDB connection.', err.message)
  )

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // last 30 days
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
