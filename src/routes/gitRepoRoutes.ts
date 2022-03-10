import express from 'express'
import gitRepoController from '../controllers/gitRepoController'
import validator from '../validators/gitRepoValidator'

const router = express.Router()

router.get('/', validator, gitRepoController)

export default router
