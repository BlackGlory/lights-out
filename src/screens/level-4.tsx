import { Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Game } from '../components/game'
import { CenterView } from '../components/center-view'
import { IHomeParams } from './home'
import { ILevel5Params } from './level-5'

export interface ILevel4Params {}

export function Level4(
  props: NativeStackScreenProps<{
    'Home': IHomeParams
    'Level 5': ILevel5Params
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
          [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
        , [1, 1, 1, 1, 1]
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
