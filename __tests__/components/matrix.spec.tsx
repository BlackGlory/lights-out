import { Matrix } from '../../src/components/matrix'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import '@testing-library/jest-native'

test('Matrix', () => {
  const matrix = [
    [1, 2]
  , [3, 4]
  ]

  const { getByLabelText } = render(
    <Matrix matrix={matrix}>
      {(value, x, y) => (
        <Text accessibilityLabel={`${x},${y}`}>{value}</Text>
      )}
    </Matrix>
  )

  expect(getByLabelText('0,0')).toHaveTextContent('1')
  expect(getByLabelText('1,0')).toHaveTextContent('2')
  expect(getByLabelText('0,1')).toHaveTextContent('3')
  expect(getByLabelText('1,1')).toHaveTextContent('4')
})
