import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import DrawingView from "./Views/DrawingView";
import GaleryView from './Views/GaleryView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DrawingView} options={{ headerShown: false }} />
        <Stack.Screen name="Galery" component={GaleryView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;


