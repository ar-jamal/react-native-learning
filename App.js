import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './components/Camera';
import MainPage from './components/PlaceForm';
// import CameraPage from './screens/Camera';
import Page01 from './screens/setTask';
import ImagePickerHandler from './screens/Camera02';
import Map from './components/map';
import AllPlaces from './screens/allPlaces';
import { init } from './utils/database';
import AppLoading from 'expo-app-loading';
import PlaceForm from './components/PlaceForm';
import ButtonR from './components/ButtonR';
import PlaceDetails from './screens/PlaceDetails';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const [dbInitialized, setDbinitialized] = useState(false);
  // useEffect(() => {
  //   init()
  //     .then(() => {
  //       setDbinitialized(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }); 
  // }, []);

  // if(!dbInitialized) {
  //   return <AppLoading />;
  // }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='All_Places'>
          <Stack.Screen name="Place Form" component={PlaceForm} />
          <Stack.Screen name="Camera_Page" options={{
            headerTitle: "Camera Page"
          }} component={ImagePickerHandler} />
          <Stack.Screen name="Location_Map" component={Map} />
          <Stack.Screen name="Place Details" component={PlaceDetails} />
          <Stack.Screen
            name="All_Places"
            component={AllPlaces}
            options={{
              headerRight: () => {
                const navigation = useNavigation()
                const onPressHandler = () => {
                  navigation.navigate('Add Place')
                }
                <ButtonR 
                  title= '+'
                  onPress= {onPressHandler}
                />
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}