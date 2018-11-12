import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50
  },
  outline: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  primary: {
    backgroundColor: '#2FF3A3',
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    letterSpacing: 2,
    fontSize: 18,
    textAlign: 'center'
  },
  textOutline: {
    color: '#2FF3A3'
  },
  textPrimary: {
    color: '#fff'
  },
  spinner: {
    marginRight: 10
  }
})