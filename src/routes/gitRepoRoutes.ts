import express from 'express'
import gitRepoController from '../controllers/gitRepoController'
import validator from '../middleware/validatorMiddleware'

const router = express.Router()

router.get('/repo', validator, gitRepoController)

export default router
