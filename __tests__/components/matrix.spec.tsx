import React from 'react'
import { Matrix } from '../../src/components/matrix'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import '@testing-library/jest-native'

test('Matrix', () => {
  const matrix = [
    [1, 2]
  , [3, 4]
  ]

  const { getByA11yLabel } = render(
    <Matrix matrix={matrix}>
      {(value, x, y) => (
        <Text accessibilityLabel={`${x},${y}`}>{value}</Text>
      )}
    </Matrix>
  )

  expect(getByA11yLabel('0,0')).toHaveTextContent('1')
  expect(getByA11yLabel('1,0')).toHaveTextContent('2')
  expect(getByA11yLabel('0,1')).toHaveTextContent('3')
  expect(getByA11yLabel('1,1')).toHaveTextContent('4')
})
