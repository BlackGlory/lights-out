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
import { ILevel1Params } from './level-1'
import { ILevel2Params } from './level-2'
import { ILevel3Params } from './level-3'
import { ILevel4Params } from './level-4'
import { ILevel5Params } from './level-5'

export interface IHomeParams {}

export function Home(
  props: NativeStackScreenProps<{
    'Level 1': ILevel1Params
    'Level 2': ILevel2Params
    'Level 3': ILevel3Params
    'Level 4': ILevel4Params
    'Level 5': ILevel5Params
  }>
) {
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
