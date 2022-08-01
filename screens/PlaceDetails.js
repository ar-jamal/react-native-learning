import React, { useState, useEffect, useCallback, onChangeText } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import allStyles from '../components/allStyles';
import ButtonR from '../components/ButtonR';
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
      <Text style={allStyles.listText}> `${fetchedPlace.location.lat}, \b ${fetchedPlace.location.lng}` </Text>
      <ButtonR
        style={{ borderRadius: 0, height: 120 }}
        title='c'
        onPress={() => {
          navigation.navigate('Map', {fetchedPlaceLat: fetchedPlace.location.lat, fetchedPlaceLng: fetchedPlace.location.lng})
        }}
      />
    </View>
  )
}
export default PlaceDetails;
