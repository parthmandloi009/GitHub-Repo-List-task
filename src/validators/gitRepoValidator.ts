import { NextFunction, RequestHandler } from 'express'
import Joi from 'joi'
import { CustomError } from '../utils/customError'

export const schema = Joi.object({
    page: Joi.number(),
    order: Joi.string(),
    search: Joi.string().required(),
    per_page: Joi.number(),
    sort: Joi.string(),
})

const validator: RequestHandler = (req, res, next) => {
    const validation = schema.validate(req.query)
    if (validation.error) {
        res.status(400).json({ message: validation.error.details[0].message })
    } else {
        return next()
    }
}

export default validator
