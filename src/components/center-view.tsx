import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native'

interface ICenterViewProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CenterView(props: ICenterViewProps) {
  const { children, style } = props

  return (
    <View style={StyleSheet.compose(
      {
        height: '100%'
      , width: '100%'
      , justifyContent: 'center'
      , alignItems: 'center'
      }
    , style
    )}>
      {children}
    </View>
  )
}
