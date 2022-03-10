import { RequestHandler } from 'express'
import { fetchGitRepoList } from '../services/gitRepoService'
import { CustomError } from '../utils/customError'
import { schema } from '../validators/gitRepoValidator'
import { ASC_ORDER, DESC_ORDER } from '../constant/responseCodes'
import { SUCCESS, FAILURE, FORBIDDEN } from '../constant/errorCodes'

const gitRepoController: RequestHandler = async (req, res, next) => {
    try {
        // const validation = schema.validate(req.query)
        // if (validation.error) {
        //     throw new CustomError(validation.error.details[0].message, 403)
        // }

        const search = req.query.search as string
        const page = parseInt(req.query.page as string) || 10
        const order = (req.query.order as string) || ASC_ORDER
        const sort = req.query.sort as string
        const per_page = req.query.per_page as string

        if (order !== ASC_ORDER && order !== DESC_ORDER) {
            throw new CustomError('Order must be asc or desc.', FAILURE)
        }

        const getRepo = await fetchGitRepoList(
            page,
            order,
            search,
            per_page,
            sort
        )

        let data: string[] = []
        let result: any
        for (result of getRepo?.data.items) {
            data.push(result)
        }
        return res.status(SUCCESS).json({ data })
    } catch (e: any) {
        // throw new CustomError('hello from error', 403)
        //throw new Error('Hello from service error')
        res.status(403).json({})
    }
}

export default gitRepoController
