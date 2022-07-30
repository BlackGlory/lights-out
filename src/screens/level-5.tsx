import React from 'react'
import { Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Game } from '../components/game'
import { CenterView } from '../components/center-view'
import { IHomeParams } from './home'

export interface ILevel5Params {}

export function Level5(
  props: NativeStackScreenProps<{
    'Home': IHomeParams
  }>
) {
  const { navigation } = props

  return (
    <CenterView style={{ padding: '5%' }}>
      <Game
        initialMatrix={[
          [0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0]
        ]}
        goalMatrix={[
          [4, 4, 4, 4, 4]
        , [4, 4, 4, 4, 4]
        , [4, 4, 4, 4, 4]
        , [4, 4, 4, 4, 4]
        , [4, 4, 4, 4, 4]
        ]}
        maxMatrixValue={4}
        onPlayerWin={steps => {
          Alert.alert(
            'You Win!'
          , `Steps: ${steps}`
          , [
              {
                text: 'Cancel'
              , style: 'cancel'
              }
            , {
                text: 'Back To Home'
              , onPress: () => navigation.navigate('Home', {})
              }
            ]
          , { cancelable: true }
          )
        }}
      />
    </CenterView>
  )
}
