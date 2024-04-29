import { describe, expect, test } from 'vitest'
import firmar, { verificar } from '../util/auth'
describe('Tests para la validacion de funcion de autenticacion', () => {
  const payload = { user: 'minombre' }
  test('Debe devolver un token en base64', () => {
    // Arreglar

    // Actuar

    // Asertar
    expect(firmar(payload)).toBeTypeOf('string')
  })
  test('Debe devolver el payload "{user: "minombre"}"', () => {
    // Arreglar
    const token = firmar(payload)

    // Actuar
    const resultado = verificar(token)

    // Asertar
    expect(resultado.user).toEqual('minombre')
  })
})
