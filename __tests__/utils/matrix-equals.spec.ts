import { IMatrix } from '../../src/types'
import { matrixEquals } from '../../src/utils/matrix-equals'

describe('matrixEquals(matrix1: IMatrix, matrix2: IMatrix): boolean', () => {
  describe('equals', () => {
    it('returns true', () => {
      const matrix1: IMatrix = [
        [1, 1]
      , [2, 2]
      ]
      const matrix2: IMatrix = [
        [1, 1]
      , [2, 2]
      ]

      const result = matrixEquals(matrix1, matrix2)

      expect(result).toBe(true)
    })
  })

  describe('does not equal', () => {
    it('returns false', () => {
      const matrix1: IMatrix = [
        [1, 1]
      , [2, 2]
      ]
      const matrix2: IMatrix = [
        [1, 1]
      , [2, 1]
      ]

      const result = matrixEquals(matrix1, matrix2)

      expect(result).toBe(false)
    })
  })
})
