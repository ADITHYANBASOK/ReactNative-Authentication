import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { themeColor, useTheme } from 'react-native-rapi-ui'


function TabBarIcon(props) {
    const {isDarkmode} = useTheme();
  return (
    <Ionicons name={props.icon} size={24} style={{ 
        marginBottom:-9,
        }}

        color={
            props.focused ? isDarkmode ? themeColor.white100 : primary : "rgb(143 ,155 ,179)"
        }
        
    />
        
  )
}

export default TabBarIcon
