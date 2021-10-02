import React from 'react'
import {
  Text
, ScrollView
, useColorScheme
, View
, Image
} from 'react-native'
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../components/button'

export function Home(props: NativeStackScreenProps<any>) {
  const { navigation } = props
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode
                   ? '#000'
                   : '#FFF'
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={backgroundStyle}
      contentContainerStyle={{
        justifyContent: 'center'
      , height: '100%'
      }}
    >
      <View style={{
        marginBottom: 32
      , alignItems: 'center'
      }}>
        <Image
          style={{
            width: 96
          , height: 96
          , marginBottom: 10
          }}
          source={require('../../assets/favicon.png')}
        />
        <Text style={{ fontSize: 40, fontFamily: 'serif', fontWeight: 'bold' }}>Lights Out</Text>
      </View>
      <View style={{
        alignItems: 'center'
      }}>
        <Level title='Level 1' screen='Level 1' navigation={navigation} />
        <Level title='Level 2' screen='Level 2' navigation={navigation} />
        <Level title='Level 3' screen='Level 3' navigation={navigation} />
        <Level title='Level 4' screen='Level 4' navigation={navigation} />
        <Level title='Level 5' screen='Level 5' navigation={navigation} />
      </View>
    </ScrollView>
  )
}

function Level(props: {
  title: string
  screen: string
  navigation: NativeStackNavigationProp<any>
}) {
  const { title, navigation, screen } = props

  return (
    <View style={{
      marginVertical: 16
    , width: 128
    }}>
      <Button
        onPress={() => navigation.navigate(screen)}
        title={title}
      />
    </View>
  )
}
