const Koa = require('koa');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
koaqs(app);

const app = new Koa();

// Use the qs library instead of querystring to support nested objects.
koaqs(app);

app
	.use(logger())
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

module.exports = app;
