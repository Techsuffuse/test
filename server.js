const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')


const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: 'Lingling998',
  port: 5432,
})
pool.on('error', (err, client) => {
  console.error('Error:', err);
});

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)