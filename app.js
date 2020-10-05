const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore =  require('connect-mongo')(session)
const staticAsset = require('static-asset')
const config = require('./config');
const routes = require('./routes')
const app = express();

app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection:mongoose.connection
    })
  })
)

// database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.set('useUnifiedTopology', true)
mongoose.connection
  .on('error', error => console.log(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => {
    const info = mongoose.connections[0];
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);


  });
mongoose.connect(config.MONGO_URL, {useNewUrlParser: true, useCreateIndex: true});

app.use(staticAsset(path.join(__dirname, 'public')))
app.use('/public', express.static(path.join('public')))
app.use(
  '/scripts',
  express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))
);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index'));

app.get('/login', (req, res) => res.render('login'));


app.get('/registr', (req, res) => res.render('registr'));

app.get('/accaunt' , (req, res) => {
  const id = req.session.userID;
  const login = req.session.userLogin
  const token = req.session.userToken
  res.render('accaunt', {
    user: {
      id,
      login,
      token
    }
  })
})

app.get('/download' , (req, res) => {
  const id = req.session.userID;
  const login = req.session.userLogin
  const token = req.session.userToken
  res.render('download', {
    user: {
      id,
      login,
      token
    }
  })
})
  
app.get('/change' , (req, res) => {
  const id = req.session.userID;
  const login = req.session.userLogin
  const token = req.session.userToken
  res.render('change', {
    user: {
      id,
      login,
      token
    }
  })
})

app.get('/predmet', (req, res) => {
  const id = req.session.userID;
  const login = req.session.userLogin
  const token = req.session.userToken
  res.render('predmet', {
    user: {
      id,
      login,
      token
    }
  })
})
-
app.get('/achiv' , (req, res) => {
  const id = req.session.userID;
  const login = req.session.userLogin
  const token = req.session.userToken
  res.render('achiv', {
    user: {
      id,
      login,
      token
    }
  })
})

app.use('/api/auth', routes.auth);
app.use('/api/main', routes.main)

app.listen(config.PORT, () =>
  console.log(`Example app listening  localhost:${config.PORT}`)
);

module.exports = app