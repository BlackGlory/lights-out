module.exports = {
  preset: 'jest-expo'
, setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
, transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@blackglory/.*|extra-react-hooks|extra-fsm|extra-utils|extra-promise|extra-lazy|return-style|iterable-operator|extra-compatible|extra-generator|extra-abort|lodash-es)'
  ]
}
