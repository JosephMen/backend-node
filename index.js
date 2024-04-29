import service from './src/config/serviceConfig.js'
import GetRequestPersonal from './src/request/getRequest.js'
import RequestBuilderPersonal from './src/config/requestBuilder.js'
import RouterProductos from './src/routes/routerProductos.js'
import RouterAuth from './src/routes/routerAuth.js'
import PostLogInReq from './src/request/postLogInReq.js'
import PostSignInReq from './src/request/postSignInReq.js'
import express from 'express'
import * as db from './src/database.js'
import cors from 'cors'
const routerProductos = new RouterProductos('/products')

const getReq = new GetRequestPersonal(new RequestBuilderPersonal())
routerProductos.init()
routerProductos.addRequest(getReq)
routerProductos.router.use(cors())
routerProductos.router.options('/products', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.send(200)
})

const loginReq = new PostLogInReq()
const signinReq = new PostSignInReq()
const routAuth = new RouterAuth('/auth')
routAuth.router.use(express.json())
routAuth.router.use(express.urlencoded())
routAuth.router.options('/auth/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.send(200)
})
routAuth.router.options('/auth/signin', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.send(200)
})
routAuth.router.use(cors())
routAuth.init()
routAuth.addRequest(loginReq)
routAuth.addRequest(signinReq)

service.addRouter(routAuth)
service.addRouter(routerProductos)
// service.enableDocumentation()
service.run(() => {
  console.log('Servicio en ejecucion !')
})
