import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function navigateDrawer({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}