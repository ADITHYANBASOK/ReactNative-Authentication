import React from 'react'
import { View } from "react-native";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
  TopNav,
  useTheme,
  themeColor
} from "react-native-rapi-ui";  
import Ionicons from "@expo/vector-icons/Ionicons"; 

function SecondScreen({navigation}) {
    const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark} // Fixed ternary condition and parentheses
          />
        }
        leftAction={()=>{
            navigation.goBack()
        }}
        rightContent={
            <Ionicons 
              name={isDarkmode ? "sunny" : "moon"} 
              size={24} 
              color={isDarkmode ? themeColor.white : themeColor.dark }
            />
          } 
          rightAction={()=>{
            if (isDarkmode){
                setTheme("light")
            }
            else{
                setTheme("dark")
            }
        
          }
            
        }
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text fontWeight="bold" style={{ textAlign: "center" }}>Second Screen</Text>
      </View>
    </Layout>
  )
}

export default SecondScreen
