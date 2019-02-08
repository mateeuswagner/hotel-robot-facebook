const cotacao_com_datas = require('../intents/cotacao_com_datas');
const helper = require('../helper');

const postMessage = (req, res, next) => {
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const userID = req.body.userID;

    let date_period = helper.datesToPeriod(checkin, checkout);
    let data = { result: { parameters: {'date-period': date_period} } };

    cotacao_com_datas(data, userID);
    
    res.sendStatus(200);

    return;
}

module.exports = postMessage;