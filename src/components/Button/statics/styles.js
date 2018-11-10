import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: 235
  },
  primary: {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  outline: {
    backgroundColor: '#37AFFF',
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
    fontSize: 18,
    textAlign: 'center'
  },
  textPrimary: {
    color: 'rgba(55,175,255,0.87)'
  },
  textOutline: {
    color: '#fff'
  },
  spinner: {
    marginRight: 10
  }
})