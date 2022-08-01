import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import allStyles from '../components/allStyles';
// import Place from './Class'

export default function PlaceItem({ onSelect, place, lat }) {
  
  return (
    <TouchableOpacity
      style={allStyles.placeItem}
      onPress={onSelect.bind(this, place.id)}
    >
      <View style={allStyles.placesAll}
      >
        <View style={allStyles.imageAll} >
          {imageUri && <Image style={allStyles.imageAll}
            source={{ uri: place.imageUri }}
          />}
        </View>
        <Text style={allStyles.textAll}> {place.title} || Jamal </Text>
      </View>
      <View>
        {lat && <MapView
          initialRegion={{
            latitude: place.location.lat,
            longitude: place.location.lng
          }}
        >
        </MapView>}
      </View>
    </TouchableOpacity>
  );
}