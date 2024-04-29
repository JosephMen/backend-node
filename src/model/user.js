import UserMongo from './UserMongo.js'
export default class User {
  async find (email) {
    return await UserMongo.findOne({ email })
  }

  async add ({ email, password, name }) {
    const usuario = await UserMongo.findOne({ email })
    if (usuario !== null) return null
    const user = new UserMongo({ email, name, password })
    await user.save()
    return user
  }
}
