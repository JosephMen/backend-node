import { PostRequest, RequestContext, RequestParameterType } from 'itrm-tools'
import User from '../model/user.js'
import cifrar from '../util/crypt.js'
export default class PostSignInReq extends PostRequest {
  /**
   * @type {User}
  */
  #user
  constructor () {
    super({
      path: '/signin',
      params: [{
        context: RequestContext.BODY,
        properties: [
          { name: 'email', type: RequestParameterType.STRING },
          { name: 'password', type: RequestParameterType.STRING },
          { name: 'name', type: RequestParameterType.STRING }
        ]
      }
      ]
    })
    this.#user = new User()
  }

  async apply (req, res, next) {
    try {
      const { email, password, name } = req.body
      const hashedPass = await cifrar(password)
      const resultado = await this.#user.add({ email, password: hashedPass, name })
      if (!resultado) {
        return res.json({
          ok: false,
          message: 'este email ya fue registrado'
        })
      }
      return res.json({
        ok: true,
        message: 'usuario creado',
        usuario: { email, name }
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
