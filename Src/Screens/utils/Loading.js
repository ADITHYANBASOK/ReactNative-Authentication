import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Layout, Text, themeColor } from 'react-native-rapi-ui'

function Loading() {
  return (
    <Layout>
      <View 
      style={{
        flex:1,
        alignItem:"center",
        justifyContent:"center",
      }}
      >
        <ActivityIndicator size="large" color={themeColor.primary} />

      </View>
    </Layout>

  )
}

export default Loading
