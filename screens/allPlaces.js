import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '../utils/database';
import PlacesList from '../places/placesList';
import { useIsFocused } from '@react-navigation/native';

export default function AllPlaces({ navigation, title, imageUri }) {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const isFocused = useIsFocused();
  
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces()
      setLoadedPlaces(places)
    }
    if (isFocused) {
      loadPlaces()
    }
  },[isFocused]);
  return <PlacesList places= {loadedPlaces}/>
    
  
}