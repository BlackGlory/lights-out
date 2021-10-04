import React, { memo } from 'react'
import { View } from 'react-native'

interface IMatrixProps {
  matrix: number[][]
  children: (value: number, x: number, y: number) => React.ReactNode
}

export const Matrix = memo(function Matrix(props: IMatrixProps) {
  const { matrix, children: renderCeil } = props

  return (
    <View style={{
      aspectRatio: 1
    , width: '100%'
    }}>
      {matrix.map((row, y) => (
        <View key={y} style={{
          flexDirection: 'row'
        , flex: 1
        , marginTop: y === 0 ? 0 : '2.5%'
        }}>
          {row.map((value, x) => (
            <View key={x} style={{
              flex: 1
            , marginLeft: x === 0 ? 0 : '2.5%'
            }}>
              {renderCeil(value, x, y)}
            </View>
          ))}
        </View>
      ))}
    </View>
  )
})
