import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  0: {
    backgroundColor: '#0EA5E9'
  },
  1: {
    backgroundColor: '#84CC16'
  },
  2: {
    backgroundColor: '#F97316'
  },
  3: {
    backgroundColor: '#A855F7'
  },
  4: {
    backgroundColor: '#64748B'
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
