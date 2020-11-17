const createError = require('fastify-error')

module.exports = function (code, message, statusCode, ...vars) {
    const errTemplate = createError(code, message, statusCode)
    return errTemplate(...vars)
}