import { APIRequestBuilder } from 'itrm-tools'

export default class RequestBuilderPersonal extends APIRequestBuilder {
  buildParams () {
    return []
  }

  buildDocDetails () {
    return {
      description: 'Get Request',
      samples: [{
        status: 200,
        input: { x: 5, y: 2 },
        output: {
          message: 'hola cómo estás'
        }
      }]
    }
  }

  buildApiRequestConfig (path) {
    return {
      path,
      params: this.buildParams(),
      details: this.buildDocDetails()
    }
  }
}
