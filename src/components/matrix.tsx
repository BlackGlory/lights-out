import React, { memo } from 'react'
import { View } from 'react-native'
import { Tile } from './tile'

interface IMatrixProps {
  matrix: (0 | 1 | 2 | 3 | 4)[][]
  onClick?: (x: number, y: number) => void
}

export const Matrix = memo(function Matrix(props: IMatrixProps) {
  const { matrix, onClick } = props

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
              <Tile
                value={value}
                onClick={onClick ? () => onClick(x, y) : undefined}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  )
})
