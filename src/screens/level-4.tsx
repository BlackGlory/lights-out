import React from 'react'
import { Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Game } from '../components/game'
import { CenterView } from '../components/center-view'

export function Level4(props: NativeStackScreenProps<any>) {
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
          [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        ]}
        maxMatrixValue={1}
        onWin={steps => {
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
                    , { name: 'Level 5' }
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
