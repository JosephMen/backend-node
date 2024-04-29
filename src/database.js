import mongoose from 'mongoose'

const mongoUri = process.env.MONGODB_URI
console.log(mongoUri)
mongoose.connect(mongoUri, {

}).then(db => {
  console.log('Base de datos conectada')
}).catch(err => {
  console.log('Error de conexion')
  console.log(err)
})
