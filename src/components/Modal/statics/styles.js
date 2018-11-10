import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

export const styles = {
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: window.height,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 22
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 19,
    lineHeight: 27,
    marginBottom: 8,
    color: 'rgba(0,0,0, 0.87)'
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(0,0,0,0.60)'
  },
  spinner: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  children: {
    marginTop: 120,
    position: 'relative',
    bottom: 0
  }
}
