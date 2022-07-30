import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import allStyles from '../components/allStyles';
import Place from './Class'
import PlaceItem from './PlaceItem';
import { useNavigation } from '@react-navigation/native';

export default function PlacesList({ places,  }) {
  const navigation = useNavigation();
  const selectPlaceHandler = (id) => {
    navigation.navigate('Place Details', { placeId: id })
  }
  if (!places || places.length === 0) {
    return (
      <View style={allStyles.placesListM}>
        <Text> No places added! Kindly add the place </Text>
      </View>
    )
  }
  return (
    <View style={allStyles.placesListM}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
      />
    </View>
  );
}