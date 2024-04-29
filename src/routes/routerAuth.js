import { APIRouter } from 'itrm-tools'

export default class RouterAuth extends APIRouter {
  async runMiddleware (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    return next()
  }
}
