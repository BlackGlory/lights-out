import React, { useState, useMemo } from 'react'
import { Text, View, Modal } from 'react-native'
import { Button } from './button'
import { Matrix } from './matrix'
import { assert } from '@blackglory/errors'
import { useImmer } from 'use-immer'
import { useIncrement } from 'extra-react-hooks'
import { matrixEquals } from '../utils/matrix-equals'

interface IGameProps {
  initialMatrix: (0 | 1 | 2 | 3 | 4)[][]
  maxMatrixValue: 1 | 2 | 3 | 4
  goalMatrix: (0 | 1 | 2 | 3 | 4)[][]
  onWin?: (steps: number) => void
}

export function Game(props: IGameProps) {
  const { initialMatrix, maxMatrixValue, goalMatrix, onWin } = props
  const [matrix, updateMatrix] = useImmer<(0 | 1 | 2 | 3 | 4)[][]>(initialMatrix)
  const matrixHeight = matrix.length
  const matrixWidth = matrix[0].length
  assert(matrixWidth === matrixHeight, 'The height and width of matrix must be the same')
  const maxMatrixIndex = matrix.length - 1

  const [steps, incrementSteps, resetSteps] = useIncrement(0)
  const [isWin, setWin] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={{ alignItems: 'center' }}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ opacity: 1, padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Matrix matrix={useMemo(() => initialMatrix, [])} />
              </View>
              <Text style={{ textAlign: 'center', marginHorizontal: 5 }}>&#10132;</Text>
              <View style={{ flex: 1 }}>
                <Matrix matrix={useMemo(() => goalMatrix, [])} />
              </View>
            </View>
            <View style={{ width: 128, marginTop: 20 }}>
              <Button
                onPress={() => setModalVisible(false)}
                title='Close' 
              />
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <Matrix
          matrix={matrix}
          onClick={(x, y) => {
            if (isWin) return

            updateMatrix(matrix => {
              incrementSteps()
              updateValue(x, y)

              if (x - 1 >= 0) {
                updateValue(x - 1, y)
              }

              if (x + 1 <= maxMatrixIndex) {
                updateValue(x + 1, y)
              }

              if (y - 1 >= 0) {
                updateValue(x, y - 1)
              }

              if (y + 1 <= maxMatrixIndex) {
                updateValue(x, y + 1)
              }

              if (matrixEquals(matrix, goalMatrix)) {
                win()
              }

              function updateValue(x: number, y: number) {
                matrix[y][x] = getNextValue(matrix[y][x])
              }

              function getNextValue(currentValue: 0 | 1 | 2 | 3 | 4): 0 | 1 | 2 | 3 | 4 {
                const nextValue = currentValue === maxMatrixValue
                                  ? 0
                                  : currentValue + 1
                return nextValue as 0 | 1 | 2 | 3 | 4
              }
            })
          }}
        />
      </View>

      <Text style={{ fontSize: 16, marginTop: 20 }}>Steps: {steps}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ width: 128, marginHorizontal: 10 }}>
          <Button
            onPress={() => setModalVisible(true)}
            title='Goal' 
          />
        </View>
        <View style={{ width: 128, marginHorizontal: 10 }}>
          <Button
            onPress={() => {
              resetSteps()
              updateMatrix(initialMatrix)
              setWin(false)
            }}
            title='Reset' 
          />
        </View>
      </View>
    </View>
  )

  function win() {
    setWin(true)
    onWin?.(steps)
  }
}
