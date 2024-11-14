import React from 'react'
import { Text, useTheme } from 'react-native-rapi-ui'


function TabBarText(props) {
    const {isDarkmode} = useTheme();
  return (
    <Text style={{ marginBottom: 5 }} 
    color={
        props.focused ? isDarkmode ? themeColor.white100 : primary : "rgb(143 ,155 ,179)"
    } 
    >
        {props.title}
    </Text>
  )
}

export default TabBarText
