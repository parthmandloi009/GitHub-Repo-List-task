import { NextFunction, Response } from 'express'
import { ERROR_MESSAGE } from '../constant/responseCodes'
import { INTERNAL_SERVER_ERROR } from '../constant/errorCodes'
import { CustomError } from '../utils/customError'

function handleError(
    err: TypeError | CustomError | any,
    res: Response,
    next: NextFunction
) {
    const status = err.status || INTERNAL_SERVER_ERROR
    const message = err.message || ERROR_MESSAGE
    res.status(status).send({
        message,
        status,
    })
}

export default handleError
