'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-route');
const bodyParser = require('koa-bodyparser');

const chartCtrl = require('./controllers/chart.ctrl');
const db = require('./db/models/');

const app = koa();
const port = 8080;

app.use(bodyParser());
app.use(serve(__dirname + '/../client'));

app.use(router.post('/api/create/', chartCtrl.create));
app.use(router.get('/api/read/:id', chartCtrl.readById));

db.sequelize.sync()
  .then(() => {
    db.initChartData();
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });