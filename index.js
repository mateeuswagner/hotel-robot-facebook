const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const dialogFlowAccessor = require('./dialogFlowAccessor');
const findIntent = require('./intents/findIntent');

const config = require('./bottender.config');

const express = require('express');
const router = express.Router();
const routes = require('./routes');
const cors = require('cors');

routes(router);

bot = new MessengerBot({
  accessToken: config.messenger.accessToken,
  appSecret: config.messenger.appSecret,
});

bot.onEvent(async context => {
  const user = await context.getUserProfile();
  if (!context.state[user.id] || !context.state[user.id].welcomed) {
    let userState =  {};
    userState[user.id] = {welcomed: true};
    await context.setState(userState);

    await context.sendText('Seja bem vindo ' + user.first_name + '! Estou aqui 24h para atendê-lo.');

    context.sendText('Em que posso te ajudar?', {
      quick_replies: [
        {
          content_type: 'text',
          title: 'Cotação',
          payload: 'Cotação',
        },
      ],
    });
    return;
  }


  if (!context.event.isText) {
    await context.sendText('Por enquanto só entendo texto e interações ;)');
    return;
  }

  const text = context.event.text;
  const res = await dialogFlowAccessor(text);

  await findIntent(res.data.result.metadata.intentName, res.data, context, user.id);
});

const server = createServer(bot, { verifyToken: config.messenger.verifyToken });

server.use(cors());
server.use('/api', router);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
