import { describe, expect, test } from 'vitest'
import cifrar, { comparar } from '../util/crypt'
describe('Tests para la validacion de funcion de encripcion', () => {
  const password = 'minombre'
  test('Debe devolver un string pasado un string', async () => {
    // Arreglar

    // Actuar
    const hash = await cifrar(password)
    // Asertar
    expect(hash).toBeTypeOf('string')
  })
  test('Debe devolver verdadero al comparar texto plano con cifrado', async () => {
    // Arreglar
    const hashed = await cifrar(password)

    // Actuar
    const resultado = await comparar(password, hashed)

    // Asertar
    expect(resultado).toEqual(true)
  })
})
