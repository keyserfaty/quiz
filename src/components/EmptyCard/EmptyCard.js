import React from 'react'
import { View } from 'react-native'

const EmptyCard = (props) => {
  const { style } = props

  const styles = {
    container: {
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 3,
      shadowColor: 'rgba(0,0,0,0.11)',
      shadowOpacity: 11,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      marginBottom: 8
    }
  }

  return (
    <View style={[styles.container, style]}>
      {props.children}
    </View>
  )
}

export default EmptyCard
