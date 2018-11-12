import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

export const styles = {
  container: {
    position: 'absolute',
    height: window.height,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  alert: {
    borderRadius: 3,
    width: '95%',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 8
  },
  msg: {
    fontSize: 16,
    lineHeight: 27,
    color: 'rgba(0,0,0, 0.5)'
  },
  children: {
    marginTop: 120,
    position: 'relative',
    bottom: 0
  },
  success: {
    backgroundColor: '#86DE8E'
  },
  failure: {
    backgroundColor: '#E67777'
  },
  msgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}
