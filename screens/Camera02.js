import React, { useState, useEffect, useCallback } from 'react';
import { View, Button, Text, Image } from 'react-native';
// import ButtonCam from '../components/ButtonCam';
import { launchCameraAsync } from 'expo-image-picker';
import allStyles from '../components/allStyles';
import ButtonR from '../components/ButtonR';

export default function ImagePickerHandler({ navigation }) {
  const parameterHandler = () => {
    navigation.navigate('Main_Page', { pickedImage })
  }

  const [pickedImage, setPickedImage] = useState("")

  const loadCamera = useCallback(async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    // console.log(image.uri)
    setPickedImage(image.uri);

  }, [])
  useEffect(() => {
    loadCamera()

  }, [])

  return (<View
    style={{ width: '100%', padding: 20,
      alignItems: "center" }}
  >
    <View style={{
      width: '100%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#1e005a',
    }}
    >
      {pickedImage ? <Image style={{ aspectRatio: 1, width: "100%" }}
        source={{ uri: pickedImage }}
      />
        : <Text> Kindly take a picture to upload </Text>
      }

    </View>
    <View style={{
      flexDirection: "row",
      justifyContent: 'center',
      margin: 12,
      width: '100%'
    }}
    >
      <ButtonR
        style={{ aspectRatio: 2.7, borderBottomRightRadius: 0 }}
        title='Go back'
        onPress={parameterHandler}
      />
      <ButtonR
        style={{
          aspectRatio: 2.7,
          borderBottomLeftRadius: 0,
          marginLeft: 3,
        }}
        title='Take Photo'
        onPress={loadCamera}
      />
    </View>

  </View>
  )
}