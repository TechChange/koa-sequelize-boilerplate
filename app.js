const Koa = require('koa');
const router = require('./routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

module.exports = app;
