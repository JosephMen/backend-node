import bcrypt from 'bcryptjs'
const { hash, compare } = bcrypt

/**
 *
 * @param {string} password
 * @returns {Promise<string>}
 */
export default async function cifrar (password) {
  return await hash(password, 10)
}
export async function comparar (plain, hashed) {
  if (!plain || !hashed) return false
  return await compare(plain, hashed)
}
