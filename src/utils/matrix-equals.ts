import { IMatrix } from '../types'

export function matrixEquals(
  matrix1: IMatrix
, matrix2: IMatrix
): boolean {
  if (matrix1.length !== matrix2.length) return false

  for (let y = 0; y < matrix1.length; y++) {
    if (matrix1[y].length !== matrix2[y].length) return false

    for (let x = 0; x < matrix1[y].length; x++) {
      if (matrix1[y][x] !== matrix2[y][x]) return false
    }
  }

  return true
}
