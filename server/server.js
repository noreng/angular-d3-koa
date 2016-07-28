'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-route');

const chartCtrl = require('./controllers/chart.ctrl');
const db = require('./db')

const app = koa();
const port = 8080;

app.use(serve(__dirname + '/../client'));

app.use(router.get('/api/read/:id', chartCtrl.readById));

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });