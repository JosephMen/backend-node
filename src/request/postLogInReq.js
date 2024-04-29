import { PostRequest, RequestContext, RequestParameterType } from 'itrm-tools'
import { comparar } from '../util/crypt.js'
import firmar from '../util/auth.js'
import User from '../model/user.js'

export default class PostLogInReq extends PostRequest {
  /**
   * @type {User}
   */
  #user
  constructor () {
    super({
      path: '/login',
      params: [{
        context: RequestContext.BODY,
        properties: [
          { name: 'email', type: RequestParameterType.STRING },
          { name: 'password', type: RequestParameterType.STRING }
        ]
      }]
    })
    this.#user = new User()
  }

  async apply (req, res) {
    try {
      const { email, password } = req.body
      const user = await this.#user.find(email)
      const hashedPass = user?.password
      const esValida = await comparar(password, hashedPass)

      if (!esValida) {
        return res.json({
          ok: false,
          message: 'Error con las credenciales'
        })
      }
      const { name } = user
      const token = firmar({ email, name })
      return res.json({
        ok: true,
        token,
        name,
        message: 'Datos correctos'
      })
    } catch (e) {
      console.log(e)
      return res.json({
        ok: false,
        message: 'Error en el servidor'
      })
    }
  }
}
