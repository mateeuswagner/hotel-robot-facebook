const searchMotorAccessor = require('../searchMotorAccessor');
const helper = require('../helper');

const cotacao_com_datas = async (data, userID) => {
    await bot.connector.client.sendText(userID, 'Aguarde enquanto verifico os quartos disponíveis...')
    let checkin;
    let checkout;

    const date_period = helper.getDates(data.result.parameters);

    if (date_period) {
        const dates = helper.dateParser(date_period);
        checkin = dates[0];
        checkout = dates[1];
    }
    const rooms = await searchMotorAccessor(checkin, checkout);

    if (!rooms || rooms.available.length === 0) {
        await bot.connector.client.sendText(userID, 'Sem quartos disponíveis no período fornecido!');
        return;
    }

    let attachments = []
    for (room of rooms.available) {
        let heroCard = 
        {
            title: room.name,
            image_url: room.imageURL,
            subtitle: room.price + '\n' + room.description,
            buttons: [
                {
                    type: 'postback',
                    title: 'Reservar Este',
                    payload: room.name,
                },
            ],
        };
        attachments.push(heroCard);
    }

    await bot.connector.client.sendText(userID, 'Encontrei esses quartos para você escolher!');
    await bot.connector.client.sendGenericTemplate(userID, attachments, { image_aspect_ratio: 'square' })

    return;
}

module.exports = cotacao_com_datas;