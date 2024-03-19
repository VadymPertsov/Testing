import { numberToSquare } from "./numberToSquare"

describe('Number To Square', () => {
  test('Correct value', () => {
    expect(numberToSquare(2)).toBe(4)
  })

  test('Less then', () => {
    expect(numberToSquare(2)).toBeLessThan(5)
  })

  test('More then', () => {
    expect(numberToSquare(2)).toBeGreaterThan(1)
  })

  test('Not undefined', () => {
    expect(numberToSquare(2)).not.toBeUndefined()
  })
})