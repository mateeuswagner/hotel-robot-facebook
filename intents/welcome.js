const welcome = async (session) => {
    await session.sendText('Seja bem vindo ao Hotel Bla bla. Em que posso te ajudar?')
    return;
}

module.exports = welcome;