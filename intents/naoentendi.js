const naoentendi = async (data, session) => {
    await session.sendText(data.result.fulfillment.speech)
    return;
}

module.exports = naoentendi;