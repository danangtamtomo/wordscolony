var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoDbConnection = require('./configs/db/mongodb')

var auth = require('./routes/auth')
var users = require('./routes/users')
var articles = require('./routes/articles')

var session = require('express-session')

var LocalStrategy = require('./strategies/LocalStrategy')
var app = express()
app.use(cors())

mongoDbConnection.on('error', console.error.bind(console, 'connection error:'))
mongoDbConnection.once('open', function () {
  console.log('Mongodb is connected')
})


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: true
}))

app.use(cookieParser())

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(LocalStrategy.initialize())
app.use(LocalStrategy.session())

app.use('/auth', auth)
app.use('/user', users)
app.use('/article', articles)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('404')
})

module.exports = app
