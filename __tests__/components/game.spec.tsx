import React from 'react'
import { Game } from '../../src/components/game'
import { render, within, fireEvent } from '@testing-library/react-native'
import '@testing-library/jest-native'

describe('Game', () => {
  test('init', () => {
    const initalMatrix = [
      [1, 1]
    , [1, 1]
    ]
    const goalMatrix = [
      [4, 4]
    , [4, 4]
    ]

    const { getByTestId, getByText } = render(
      <Game
        initialMatrix={initalMatrix}
        goalMatrix={goalMatrix}
        maxMatrixValue={4}
      />
    )

    const tiles = within(getByTestId('stage')).getAllByA11yLabel('tile')
    expect(tiles).toHaveLength(4)
    expect(tiles[0]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[1]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[2]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[3]).toHaveProp('accessibilityValue', { now: 1 })
    expect(getByText(/Steps: \d+/)).toHaveTextContent('Steps: 0')
  })

  describe('click the tile', () => {
    test('2x2', () => {
      const initalMatrix = [
        [1, 1]
      , [0, 4]
      ]
      const goalMatrix = [
        [4, 4]
      , [4, 4]
      ]

      const { getByTestId, getByText } = render(
        <Game
          initialMatrix={initalMatrix}
          goalMatrix={goalMatrix}
          maxMatrixValue={4}
        />
      )
      const tiles = within(getByTestId('stage')).getAllByA11yLabel('tile')
      fireEvent.press(tiles[3])

      expect(tiles).toHaveLength(4)
      expect(tiles[0]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[1]).toHaveProp('accessibilityValue', { now: 2 })
      expect(tiles[2]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[3]).toHaveProp('accessibilityValue', { now: 0 })
      expect(getByText(/Steps: \d+/)).toHaveTextContent('Steps: 1')
    })

    test('3x3', () => {
      const initalMatrix = [
        [1, 4, 1]
      , [1, 0, 1]
      , [1, 4, 1]
      ]
      const goalMatrix = [
        [4, 4, 4]
      , [4, 4, 4]
      , [4, 4, 4]
      ]

      const { getByTestId, getByText } = render(
        <Game
          initialMatrix={initalMatrix}
          goalMatrix={goalMatrix}
          maxMatrixValue={4}
        />
      )
      const tiles = within(getByTestId('stage')).getAllByA11yLabel('tile')
      fireEvent.press(tiles[4])

      expect(tiles).toHaveLength(9)
      expect(tiles[0]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[1]).toHaveProp('accessibilityValue', { now: 0 })
      expect(tiles[2]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[3]).toHaveProp('accessibilityValue', { now: 2 })
      expect(tiles[4]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[5]).toHaveProp('accessibilityValue', { now: 2 })
      expect(tiles[6]).toHaveProp('accessibilityValue', { now: 1 })
      expect(tiles[7]).toHaveProp('accessibilityValue', { now: 0 })
      expect(tiles[8]).toHaveProp('accessibilityValue', { now: 1 })
      expect(getByText(/Steps: \d+/)).toHaveTextContent('Steps: 1')
    })
  })

  test('reset', () => {
    const initalMatrix = [
      [1, 1]
    , [1, 1]
    ]
    const goalMatrix = [
      [4, 4]
    , [4, 4]
    ]

    const { getByTestId, getByText } = render(
      <Game
        initialMatrix={initalMatrix}
        goalMatrix={goalMatrix}
        maxMatrixValue={4}
      />
    )
    const tiles = within(getByTestId('stage')).getAllByA11yLabel('tile')
    fireEvent.press(tiles[3])
    fireEvent.press(getByText('Reset'))

    expect(tiles).toHaveLength(4)
    expect(tiles[0]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[1]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[2]).toHaveProp('accessibilityValue', { now: 1 })
    expect(tiles[3]).toHaveProp('accessibilityValue', { now: 1 })
    expect(getByText(/Steps: \d+/)).toHaveTextContent('Steps: 0')
  })

  test('win', () => {
    const onWin = jest.fn()
    const initalMatrix = [
      [1, 1]
    , [1, 1]
    ]
    const goalMatrix = [
      [1, 2]
    , [2, 2]
    ]

    const { getByTestId, getByText } = render(
      <Game
        initialMatrix={initalMatrix}
        goalMatrix={goalMatrix}
        maxMatrixValue={2}
        onPlayerWin={onWin}
      />
    )
    const tiles = within(getByTestId('stage')).getAllByA11yLabel('tile')
    fireEvent.press(tiles[3])

    expect(getByText(/Steps: \d+/)).toHaveTextContent('Steps: 1')
    expect(onWin).toBeCalledTimes(1)
    expect(onWin).toBeCalledWith(1)
  })
})
