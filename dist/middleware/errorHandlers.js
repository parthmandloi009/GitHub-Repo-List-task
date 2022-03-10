"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseCode_1 = require("../constant/responseCode");
function handleError(error, req, res, next) {
    const status = error.status || responseCode_1.ENTERNAL_SERVER_ERROR;
    const message = error.message || responseCode_1.ERROR_MESSAGE;
    res.status(status).send({
        message,
        status,
    });
}
exports.default = handleError;
