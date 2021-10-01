import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './screens/home'
import { Level1 } from './screens/level-1'
import { Level2 } from './screens/level-2'
import { Level3 } from './screens/level-3'
import { Level4 } from './screens/level-4'
import { Level5 } from './screens/level-5'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Level 1' component={Level1} />
        <Stack.Screen name='Level 2' component={Level2} />
        <Stack.Screen name='Level 3' component={Level3} />
        <Stack.Screen name='Level 4' component={Level4} />
        <Stack.Screen name='Level 5' component={Level5} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
