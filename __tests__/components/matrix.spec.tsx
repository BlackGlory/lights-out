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
        <Text accessibilityLabel={value.toString()}>
          x:{x}, y:{y}
        </Text>
      )}
    </Matrix>
  )

  expect(getByA11yLabel('1')).toHaveTextContent('x:0, y:0')
  expect(getByA11yLabel('2')).toHaveTextContent('x:1, y:0')
  expect(getByA11yLabel('3')).toHaveTextContent('x:0, y:1')
  expect(getByA11yLabel('4')).toHaveTextContent('x:1, y:1')
})
