import { arrayToSortedNumber } from "./arrayToSortedNumber"

describe('Array To Sorted Number', () => {
  test('Correct value', () => {
    expect(arrayToSortedNumber([3, 2, 1, 8])).toEqual([1, 2, 3, 8])
  })

  test('Empty array', () => {
    expect(arrayToSortedNumber([])).toEqual([])
  })

  test('Empty array', () => {
    expect(arrayToSortedNumber([3, 2, 1, 8])).not.toEqual([3, 2, 1, 8])
  })
})