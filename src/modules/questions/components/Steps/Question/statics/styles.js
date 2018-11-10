import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: '#74FFC6',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  counter: {
    padding: 6,
    borderColor: '#74FFC6',
    borderWidth: 1,
    marginBottom: 16
  },
  footer: {
    alignItems: 'center'
  },
  bottomBar: {
    borderColor: '#A62FF3',
    borderBottomWidth: 5
  }
})