import React from 'react'
import { Button as ReactNativeButton, ButtonProps } from 'react-native'

export function Button(props: ButtonProps) {
  return <ReactNativeButton color='black' {...props} />
}
