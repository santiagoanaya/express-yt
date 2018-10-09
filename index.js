const express = require('express');
const morgan = require('morgan');
const app = express();

// require routes

const routes = require('./routes');
const routesApi = require('./routes-api');

// settings
app.set('appName', 'First server');
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
  res.end('Nothing found');
})

app.listen(3000, () => {
  console.log('server listening')
  console.log('App name:', app.get('appName'))
});