import { NextFunction, RequestHandler } from 'express'
import Joi from 'joi'
import { CustomError } from '../utils/customError'

const schema = Joi.object({
    page: Joi.number(),
    order: Joi.string(),
    search: Joi.string().required(),
    per_page: Joi.number(),
    sort: Joi.string(),
})
const validator: RequestHandler = (req, res, next) => {
    console.log('Hello')

    const validation = schema.validate(req.query)
    if (validation.error) {
        console.log('JJJJJ')

        res.status(400).json({
            message: validation.error.details[0].message,
            status: 400,
        })
    }

    return next()
}

export default validator
