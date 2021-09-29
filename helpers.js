

function successfullMessage(msg) {
    return "✅ *WhatsAsena*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WhatsAsena*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsAsena*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
