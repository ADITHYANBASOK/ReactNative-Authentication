import React, {useContext}from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Profile from "../Screens/Profile";
import SecondScreen from "../Screens/SecondPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarText from "../Components/TabBarText";
import TabBarIcon from "../Components/TabBarIcon";
import { getApps, initializeApp } from "firebase/app";
import ForgotPassword from "../Screens/AuthScreens/ForgotPassword";
import Login from "../Screens/AuthScreens/Login";
import Register from "../Screens/AuthScreens/Register";
import Loading from "../Screens/utils/Loading";
import { AuthContext } from "../AuthContext/AuthProvider";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";




const StackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();



const firebaseConfig = {
  apiKey: "AIzaSyDK2pBu7DF5Xxsdwc9gn7FSQd8WGAFzs_k",
  authDomain: "reactauth-9a1bf.firebaseapp.com",
  projectId: "reactauth-9a1bf",
  storageBucket: "reactauth-9a1bf.appspot.com",
  messagingSenderId: "374517948715",
  appId: "1:374517948715:web:208b28eddb128bb3baa56e",
  measurementId: "G-PE435HVW6J"
};

if(getApps().length===0){
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

const MainTabs = () => {
  const {isDarkmode}=useTheme() ;
  return (
    <Tabs.Navigator screenOptions={{headerShown:false,
      tabBarStyle:{
        borderTopColor:isDarkmode? themeColor.dark100 : "white",
        backgroundColor:isDarkmode? themeColor.dark100 : "white",
      }
    }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="home"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"home"}/>
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="about"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"information-circle"}/>
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="profile"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"person"}/>
        }}
      />
    </Tabs.Navigator>
  );
};

const Main = () => {
  return (
      <StackNavigator.Navigator screenOptions={{headerShown:false}}>
        <StackNavigator.Screen name="MainTabs" component={MainTabs} />
        <StackNavigator.Screen name="SecondScreen" component={SecondScreen} />
      </StackNavigator.Navigator>
  );
};

const AuthStack =createNativeStackNavigator()

const AuthNavigator =() =>{
  return(
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Register" component={Register}/>
      <AuthStack.Screen name="forgotPassword" component={ForgotPassword}/>
    </AuthStack.Navigator>
  )
}

const MainNavigator = () =>{
  const auth = useContext(AuthContext);
  const user = auth.user;
  console.log("user",user)
  return(
    <NavigationContainer>
      {user === null && <Loading/>}
      {user === false && <AuthNavigator/>}
      {user === true && <Main/>}

    </NavigationContainer>
  )
}
export default MainNavigator;