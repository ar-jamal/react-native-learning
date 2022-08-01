import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Camera from "./components/Camera";
import ImagePickerHandler from "./places/Camera02";
import Map from "./places/map";
import AllPlaces from "./screens/allPlaces";
import { init } from "./utils/database";
// import AppLoading from "expo-app-loading";
import {ActivityIndicator} from 'react-native';
import PlaceForm from "./screens/PlaceForm";
import ButtonR from "./components/ButtonR";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const [dbInitialized, setDbinitialized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setDbinitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(!dbInitialized) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="All_Places">
          <Stack.Screen name="Place Form" component={PlaceForm} />
          <Stack.Screen
            name="Camera_Page"
            options={{
              headerTitle: "Camera Page",
            }}
            component={ImagePickerHandler}
          />
          <Stack.Screen name="Location_Map" component={Map} />
          <Stack.Screen
            name="Place Details"
            component={PlaceDetails}
            options={{
              headerTitle: "App Loading"
            }}
          />
          <Stack.Screen
            name="All_Places"
            component={AllPlaces}
            options={{
              headerRight: () => {
                const navigation = useNavigation();
                const onPressHandler = () => {
                  navigation.navigate("Place Form");
                };
                return <ButtonR title="+" onPress={onPressHandler} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
