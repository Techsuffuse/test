const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


const indexRouter = require('./routes/index')
const itemRouter = require('./routes/items')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

//database
const db = require('./config/database');
//db test
db.authenticate()
  .then(() => console.log('Database connected....'))
  .catch(err => console.log('Error: ' + err))


app.use('/', indexRouter)
app.use('/items', itemRouter)

app.listen(process.env.PORT || 3000)
