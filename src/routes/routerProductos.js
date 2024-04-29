import { APIRouter } from 'itrm-tools'
import { verificar } from '../util/auth.js'
export default class RouterProductos extends APIRouter {
  async runMiddleware (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    const token = req.headers.authorization
    if (!token) return res.json({ ok: false, message: 'no se encuentran credenciales' })
    const data = verificar(token)
    if (data === null) return res.json({ ok: false, message: 'credencial no valida' })
    req.user = { ...data }
    return next()
  }
}
