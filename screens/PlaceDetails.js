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


function PlaceDetails ({ navigation, route }) {


  return (
    <View
      style={allStyles.PlaceDetailsM}
    >     
      <Image
        style={{ width: "80%", aspectRatio: .4 }}
        source={{ uri: place.imageUri }} 
      />
      <Text style={allStyles.listText}> `${place.location.lat} \b ${place.location.lng}` </Text>
      <ButtonR
        style={{ borderRadius: 0, height: 120 }}
        title='c'
        onPress={() => {
          navigation.navigate('Camera_Page')
        }}
      />
    </View>
  )
}
export default PlaceDetails;
