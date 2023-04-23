import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTabBarButton = (props) => {
  const {children, accessibilityState} = props;

  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default CustomTabBarButton

const styles = StyleSheet.create({

})