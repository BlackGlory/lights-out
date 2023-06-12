import { View, Text, TouchableHighlight } from 'react-native'

interface IButtonProps {
  onPress: () => void 
  title: string
}

export function Button(props: IButtonProps) {
  const { onPress, title } = props

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{
        padding: 10
      , backgroundColor: 'black'
      }}>
        <Text style={{
          color: 'white'
        , textAlign: 'center'
        }}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}
