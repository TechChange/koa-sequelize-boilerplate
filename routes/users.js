const Router = require('koa-router');
const users = new Router();

const models = require('../models');

users.get('/', async (ctx, next) => {
	const allUsers = await models.user.findAll();

	ctx.body = allUsers;
	await next();
});

users.get('/:id', async (ctx, next) => {
	const user = await models.user.findById(ctx.params.id);	

	ctx.body = user;
	await next();
});

users.post('/', async (ctx, next) => {
	const user = await models.user.create(ctx.request.body);

	ctx.body = user;
	await next();
});

users.patch('/:id', async (ctx, next) => {
	const user = await models.user.findById(ctx.params.id);
	const updatedUser = await user.update(ctx.request.body);

	ctx.body = updatedUser;
	await next();
});

users.delete('/:id', async (ctx, next) => {
	const user = await models.user.findById(ctx.params.id);
	const deleted = await user.destroy();

	ctx.body = deleted;
	await next();
});

module.exports = users;