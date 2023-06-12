import { App } from '../src/app'
import { render } from '@testing-library/react-native'

// fix react-navigation issues:
// - https://github.com/react-navigation/react-navigation/issues/9727
// - https://github.com/react-navigation/react-navigation/issues/9568
jest.useFakeTimers()

it('renders correctly', () => {
  const { toJSON } = render(<App />)

  expect(toJSON()).toMatchSnapshot()
})
