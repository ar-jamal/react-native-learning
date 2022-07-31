import React, { useState, useEffect, useCallback, onChangeText } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import allStyles from './allStyles';
import ButtonR from './ButtonR';
import MapView, { Marker } from 'react-native-maps';
import { Place } from '../components/Class';
import { fetchPlaceDetials } from '../utils/database';


function PlaceDetails ({ navigation, route }) {
 
  const [fetchedPlace, setFetchedPlace] = useState()
  const {selectedPlaceId} = route.params.placeId
  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetials(selectedPlaceId);
      setFetchedPlace(place)
      navigation.setOptions({
        headerTitle: place.title
      })
    } 
    loadPlaceData();
  },[selectedPlaceId])

  return (
    <View
      style={allStyles.PlaceDetailsM}
    >     
      <Image
        style={{ width: "80%", aspectRatio: .4 }}
        source={{ uri: fetchedPlace.imageUri }} 
      />
      <Text style={allStyles.listText}> `${fetchedPlace.location.lat},  ${fetchedPlace.location.lng}` </Text>
      <ButtonR
        style={{ borderRadius: 0, height: 120 }}
        title='c'
        onPress={() => {
          navigation.navigate('Map')
        }}
      />
    </View>
  )
}
export default PlaceDetails;
