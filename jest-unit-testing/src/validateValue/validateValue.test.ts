import { validateValue } from "./validateValue"

describe('Validate Value', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true)
  })

  test('Less than correct', () => {
    expect(validateValue(-1)).toBe(false)
  })

  test('More than correct', () => {
    expect(validateValue(101)).toBe(false)
  })

  test('Border value top', () => {
    expect(validateValue(100)).toBe(true)
  })

  test('Border value bottom', () => {
    expect(validateValue(0)).toBe(true)
  })
})