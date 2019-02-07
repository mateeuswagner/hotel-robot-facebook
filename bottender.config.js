module.exports = {
  messenger: {
    appId: 'YOUR_APP_ID',
    appSecret: 'YOUR_APP_SECRET',
    accessToken: 'YOUR_APP_ID_ACCESS_TOKEN',
    verifyToken: 'YOUR_APP_ID_VERIFY_TOKEN'
  },
  dialogFlow: {
    defaultRequestMethod: 'post',
    url: 'https://api.dialogflow.com/v1/query',
    defaultParams: {
      v: '20150910'
    },
    authID: 'YOUR_DIALOG_FLOW_AUTH_ID',
    postParams: {
      lang: 'pt-BR',
      timezone: 'America/Sao_Paulo'
    },
    requestTimeout: 30000
  },
  intents: {
    defaultResponse: 'Não entendi, tente pedir de outra maneira!'
  },
  searchMotor: {
    url: 'http://localhost:3000/buscar'
  },
  webviewTemplatesURL: 'YOUR_NGROK_URL'
};