export const arrayToSortedNumber = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b)
}