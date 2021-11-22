import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AfterLoginPage from './src/navigation/AfterLoginPage';
import LandingPage from './src/navigation/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';

const MainStack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <MainStack.Navigator
            initialRouteName="Landing" screenOptions={{headerShown: false}}
        >
            <MainStack.Screen name="Landing" component={LandingPage} />
            <MainStack.Screen name="SignUp" component={SignUpPage} 
            options={{title: 'Create Account'}}/>
            <MainStack.Screen name="Login" component={LoginPage} />
            <MainStack.Screen name="AfterLogin" component={AfterLoginPage} />
        </MainStack.Navigator>      
    </NavigationContainer>    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white' 
  },
  pageHeader:{
    flex: 2
  }
});
