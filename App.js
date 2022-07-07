import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './screens/Camera';
import MainPage from './MainPage';
// import CameraPage from './screens/Camera';
import Page01 from './screens/setTask';
import ImagePickerHandler from './screens/Camera02';
import Map from './screens/map';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main page'>
        <Stack.Screen name="Main_Page" component={MainPage} />
        <Stack.Screen name="Camera_Page" options={{
          headerTitle: "Camera Page"
        }} component={ImagePickerHandler} />
        <Stack.Screen name="Set_Task" component={Page01} />
        {/* <Stack.Screen name="camera" component={ImagePickerHandler} /> */}
        <Stack.Screen name="Location_Map" component={Map} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}