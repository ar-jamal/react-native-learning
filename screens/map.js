import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import setOption from '@react-navigation/native'
import { Icon } from  '../components/Icon'
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import allStyles from '../components/allStyles';
import ButtonR from '../components/ButtonR';


function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  function setLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude
    setSelectedLocation({ lat: lat, lng: lng })
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No Location Picked',
        'Kindly Picked a Location by tapping on map');
      return;
    }
    navigation.navigate('Main_Page', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    })
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => ( 
        <Icon name='pushpino'
            type='antDesign'
            size={24}
            color='blue'
            onPress={savePickedLocationHandler}       
          />
      )
    })
  }, [navigation, savePickedLocationHandler])

  const region = {
    latitude: 24.871917,
    longitude: 66.987991,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
   return (<MapView
      initialRegion={region}
      style={{ flex: 1 }}
      onPress={setLocationHandler}
    >
      {selectedLocation && (<Marker
        title='picked Location'
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng
        }}
      />
      )}
    </MapView>
  
)};


export default Map;
