const validationMiddleware = require("./validation");
const web3Middleware = require("./web3");

module.exports = { ...validationMiddleware, ...web3Middleware };
