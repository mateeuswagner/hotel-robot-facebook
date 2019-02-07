const cotacao_com_datas = require('../intents/cotacao_com_datas');

const postMessage = (req, res, next) => {
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const userID = req.body.userID;

    let data = { result: { parameters: {} } };
    
    bot.connector.client.sendText(userID, 'hello world');
    res.sendStatus(200);
}

module.exports = postMessage;