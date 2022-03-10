import express, { Application } from 'express'
import routes from './routes/gitRepoRoutes'
import errorHandler from './middleware/errorHandlers'
import 'dotenv/config'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

const app: Application = express()
app.use(cors())

app.use('/', routes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
})

export default app
