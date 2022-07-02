import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import ButtonCam from '../components/ButtonCam';
import { launchCameraAsync } from 'expo-image-picker';

export default function ImagePickerHandler({ }) {
  const [pickedImage, setPickedImage] = useState("")

  const loadCamera = useCallback(async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5,
    });
    // console.log(image)
    setPickedImage(image.uri);

  }, []) 
  useEffect(() => {
    loadCamera()

  }, [])

  return (<TouchableOpacity
    style={[]}
  onPress={loadCamera}
  >
    {pickedImage? <Image source={{uri : pickedImage}} style={{aspectRatio: 1, width: 50}}/> : <Text> ? </Text>}
  </TouchableOpacity>)
}