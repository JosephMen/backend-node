import { APIRequestBuilder, GetRequest } from 'itrm-tools'
import getCart from '../util/getCart.js'
export default class GetRequestPersonal extends GetRequest {
  /**
     *
     * @param {APIRequestBuilder} apiBuilder
     */
  constructor (apiBuilder) {
    super(apiBuilder.buildApiRequestConfig('/'))
  }

  /**
     *
     * @param {Request} req
     * @param {Response} res
     */
  async apply (req, res) {
    const data = await getCart()
    return res.json({
      ok: true,
      data
    })
  }
}
