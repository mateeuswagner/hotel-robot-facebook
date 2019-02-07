const config = require('../bottender.config');

const cotacao = async (session) => {

    await session.sendGenericTemplate([{
        title: 'Período',
        buttons: [{
            title: 'Selecionar Datas',
            type: 'web_url',
            url: config.webviewTemplatesURL + '/webview_templates/checkin_checkout_selector',
            messenger_extensions: true,
            webview_height_ratio: 'tall'
        }]
    }]);

    return;
}

module.exports = cotacao;