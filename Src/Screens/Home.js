import React from "react";
import { Linking, View } from "react-native";
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
import { getAuth, signOut } from "firebase/auth";

function Home({navigation}) {  
    const {isDarkmode ,setTheme } = useTheme();
    const auth = getAuth();
  return (
    <Layout>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal:20,
      }}
    >
      <Section>
        <SectionContent>
          <Text fontWeight="bold" style={{textAlign:"center"}}>Components Made with Rapi UI</Text>
          <Button text="Rapi Docs" style={{ marginTop: 10 }} status="info" onPress={()=>{
            Linking.openURL("https://rapi-ui.kikiding.space/")
          }} />
          <Button text="Go to Second Screen" status="success" style={{marginTop:10}} onPress={()=>{
            navigation.navigate("SecondScreen")
          }} />
          <Button text={isDarkmode? "Dark Mode" : "light Mode"} status={isDarkmode ? "success" : "info"} style={{marginTop:10}} 
          onPress={()=>{
            if(isDarkmode){
              setTheme("light")
            }else{
              setTheme("dark")
            }
          }} />
          <Button text="sign out" status="danger" style={{marginTop:10}} 
          onPress={()=>{
            signOut(auth);
          }} />
        </SectionContent>
      </Section>
    </View>
  </Layout>
  );
}

export default Home;