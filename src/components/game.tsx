import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, Modal } from 'react-native'
import { Button } from './button'
import { Matrix } from './matrix'
import { assert } from '@blackglory/errors'
import { useImmer } from 'use-immer'
import { useIncrement } from 'extra-react-hooks'
import { matrixEquals } from '../utils/matrix-equals'
import { Tile } from './tile'

interface IGameProps {
  initialMatrix: number[][]
  maxMatrixValue: number
  goalMatrix: number[][]
  onWin?: (steps: number) => void
}

export function Game(props: IGameProps) {
  const { initialMatrix, maxMatrixValue, goalMatrix, onWin } = props
  const [matrix, updateMatrix] = useImmer<number[][]>(initialMatrix)
  const matrixHeight = matrix.length
  const matrixWidth = matrix[0].length
  assert(matrixWidth === matrixHeight, 'The height and width of matrix must be the same')
  const maxMatrixIndex = matrix.length - 1

  const [steps, incrementSteps, resetSteps] = useIncrement(0)
  const [isWin, setWin] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (!isWin && matrixEquals(matrix, goalMatrix)) {
      setWin(true)
      onWin?.(steps)
    }
  }, [matrix, isWin])

  return (
    <View style={{ alignItems: 'center' }}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ opacity: 1, padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Matrix matrix={initialMatrix}>
                  {useCallback(value => (
                    <Tile value={value} />
                  ), [])}
                </Matrix>
              </View>
              <Text style={{ textAlign: 'center', marginHorizontal: 5 }}>&#10132;</Text>
              <View style={{ flex: 1 }}>
                <Matrix matrix={goalMatrix}>
                  {useCallback(value => (
                    <Tile value={value} />
                  ), [])}
                </Matrix>
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

      <View testID='stage'>
        <Matrix matrix={matrix}>
          {(value, x, y) => (
            <Tile
              value={value}
              onClick={useCallback(() => onClick(x, y), [isWin, x, y])}
            />
          )}
        </Matrix>
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

  function onClick(x: number, y: number) {
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

      function updateValue(x: number, y: number) {
        matrix[y][x] = getNextValue(matrix[y][x])
      }

      function getNextValue(currentValue: number): number {
        const nextValue = currentValue === maxMatrixValue
                          ? 0
                          : currentValue + 1
        return nextValue
      }
    })
  }
}
