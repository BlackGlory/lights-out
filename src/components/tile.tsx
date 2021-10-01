import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  0: {
    backgroundColor: '#FCBCB5'
  },
  1: {
    backgroundColor: '#A7C6E8'
  },
  2: {
    backgroundColor: '#C4DEC1'
  },
  3: {
    backgroundColor: '#FCEB54'
  },
  4: {
    backgroundColor: '#C3C3C3'
  }
})

export function Tile(props: {
  value: 0 | 1 | 2 | 3 | 4
, onClick?: () => void
, children?: React.ReactNode
}) {
  const { value, onClick, children } = props

  return (
    <View style={{
      height: '100%'
    , width: '100%'
    }}>
      {
        onClick
        ? (
          <TouchableHighlight onPress={onClick}>
            <View style={{
              ...Styles[value]
            , height: '100%'
            , width: '100%'
            }}>{children}</View>
          </TouchableHighlight>
          )
        : (
            <View style={{
              ...Styles[value]
            , height: '100%'
            , width: '100%'
            }}>{children}</View>
          )
      }
    </View>
  )
}
