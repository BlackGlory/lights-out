import { Level3 } from '../../src/screens/level-3'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// fix react-navigation issues:
// - https://github.com/react-navigation/react-navigation/issues/9727
// - https://github.com/react-navigation/react-navigation/issues/9568
jest.useFakeTimers()

const Stack = createNativeStackNavigator()

it('renders correctly', () => {
  const component = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen' component={Level3} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  const { toJSON } = render(component)

  expect(toJSON()).toMatchSnapshot()
})
