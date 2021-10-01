import { useState, useCallback } from 'react'

export function useIncrement(
  initialValue: number = 0
): [value: number, increment: (step?: number) => void, reset: () => void] {
  const [value, setValue]= useState(initialValue)
  const increment = useCallback((step: number = 1) => setValue(value => value + step), [])
  const reset = useCallback(() => setValue(initialValue), [])

  return [value, increment, reset]
}
