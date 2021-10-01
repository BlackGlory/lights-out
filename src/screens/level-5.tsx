import React from 'react'
import { Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Game } from '../components/game'
import { CenterView } from '../components/center-view'

export function Level5(props: NativeStackScreenProps<any>) {
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
                text: 'Back To Home'
              , onPress: () => navigation.navigate('Home')
              }
            ]
          , { cancelable: true }
          )
        }}
      />
    </CenterView>
  )
}
