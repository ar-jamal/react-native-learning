import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './screens/Camera';
import MainPage from './MainPage';
// import CameraPage from './screens/Camera';
import Page01 from './screens/setTask';
import ImagePickerHandler from './screens/Camera02';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main page'>
        <Stack.Screen name="Main Page" component={MainPage} />
        <Stack.Screen name="Camera_Page" options={{
          headerTitle: "Camera Page"
        }} component={ImagePickerHandler} />
        <Stack.Screen name="set Task" component={Page01} />
        <Stack.Screen name="camera" component={ImagePickerHandler} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}