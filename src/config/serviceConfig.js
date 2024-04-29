import { APIService, ExpressStandardConfiguration } from 'itrm-tools'
import cors from 'cors'
import express from 'express'
const app = express()
app.use(cors())
const service = new APIService({
  name: 'Server',
  port: process.env.PORT ?? 3000,
  express: app
})
export default service
