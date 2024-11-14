import React from 'react'
import MainNavigator from './Src/Navigators/AppNavigator'
import { AuthProvider } from './Src/AuthContext/AuthProvider'
import { ThemeProvider } from 'react-native-rapi-ui'


function App() {
  return (
    <>
    <ThemeProvider>
      <AuthProvider>
        <MainNavigator/>
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

export default App

