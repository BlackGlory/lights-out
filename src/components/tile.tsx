import React, { memo } from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { assert } from '@blackglory/errors'

export const Tile = memo(function Tile(props: {
  value: number
, onClick?: () => void
}) {
  const { value, onClick } = props
  assert(isLegalValue(value), `${value} is not a legal value`)

  return (
    <View style={{
      height: '100%'
    , width: '100%'
    }}>
      {
        onClick
        ? (
            <TouchableHighlight
              accessibilityLabel='tile'
              accessibilityRole='button'
              accessibilityValue={{ now: value }}
              onPress={onClick}
            >
              <View style={{
                ...Styles[value]
              , height: '100%'
              , width: '100%'
              }} />
            </TouchableHighlight>
          )
        : (
            <View
              accessibilityLabel='tile'
              accessibilityValue={{ now: value }}
              style={{
                ...Styles[value]
              , height: '100%'
              , width: '100%'
              }}
            />
          )
      }
    </View>
  )
})

function isLegalValue(value: number): value is keyof typeof Styles {
  assert(Number.isInteger(value), 'The param value must be integer')
  assert(value >= 0 && value <= 4, 'The param value must be between 0 and 4')
  return true
}

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
