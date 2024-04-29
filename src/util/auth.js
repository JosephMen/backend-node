import jwt from 'jsonwebtoken'
const key = process.env.CLAVE_SECRETA ?? 'LlavePorDefecto'

export default function firmar (payload) {
  const resultado = jwt.sign(payload, key)
  return resultado
}
export function verificar (token) {
  try {
    return jwt.verify(token, key)
  } catch {
    return null
  }
}
