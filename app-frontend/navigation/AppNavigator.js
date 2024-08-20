// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AddClass from '../screens/AddClass';
import ClassDetails from '../screens/ClassDetails';
import EditClass from '../screens/EditClass';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddClass" component={AddClass} />
        <Stack.Screen name="ClassDetails" component={ClassDetails} />
        <Stack.Screen name="EditClass" component={EditClass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
