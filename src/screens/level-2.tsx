import React from 'react'
import { Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Game } from '../components/game'
import { CenterView } from '../components/center-view'
import { IHomeParams } from './home'
import { ILevel3Params } from './level-3'

export interface ILevel2Params {}

export function Level2(
  props: NativeStackScreenProps<{
    'Home': IHomeParams
    'Level 3': ILevel3Params
  }>
) {
  const { navigation } = props

  return (
    <CenterView style={{ padding: '5%' }}>
      <Game
        initialMatrix={[
          [0, 0, 0]
        , [0, 0, 0]
        , [0, 0, 0]
        ]}
        goalMatrix={[
          [1, 1, 1]
        , [1, 1, 1]
        , [1, 1, 1]
        ]}
        maxMatrixValue={1}
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
                text: 'Next Level'
              , onPress: () => {
                  navigation.reset({
                    routes: [
                      { name: 'Home' }
                    , { name: 'Level 3' }
                    ]
                  })
                }
              }
            ]
          , { cancelable: true }
          )
        }}
      />
    </CenterView>
  )
}
