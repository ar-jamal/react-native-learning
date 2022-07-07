import React, { useState, useEffect, useCallback } from 'react';
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,

} from 'react-native';
import allStyles from './components/allStyles';
import ButtonR from './components/ButtonR';
import { launchCameraAsync } from 'expo-image-picker';
import ImagePickerHandler from './screens/Camera02';
import Map from './screens/map';
import MapView from 'react-native-maps';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


function MainPage({ width, navigation, route }) {

  // const mapPickedLocation = route.params && {
  // lat: route.params.pickedLat, 
  // lng: route.params.pickedLng,
  const [text, setText] = useState('')
  const [latLng, setLatLng] = useState({
    lat: 0,
    lng: 0
  })

  const { pickedLat, pickedLng } = route.params || {};

  useEffect(() => {
    setLatLng({
      lat: pickedLat,
      lng: pickedLng
    })
  }, [pickedLat, pickedLng])
  // const lat = pickedLat;
  //   const lng = pickedLng
  // }

  // };

  const region = {
    latitude: latLng.lat,
    longitude: latLng.lng,
    latitudeDelta: 0.072,
    longitudeDelta: 0.092
  }


  const ImagePickerHandler = ({ }) => {
    const [pickedImage, setPickedImage] = useState("")
    const loadCamera = useCallback(async () => {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      // console.log(image)
      setPickedImage(image.uri);
    }, [])

    useEffect(() => {
      loadCamera()

    }, [])
  }

  return (
    <View
      style={allStyles.body}
    >
      <View style={[allStyles.headerM, { flex: 1 }]}>
        <TextInput
          style={allStyles.input}
          placeholder='what would you like to focus on?'
          placeholderTextColor='blue'

          multiline={true}
          // value= {text}
          onChangeText={value => { setText(value) }}
        />
        {/* <TouchableOpacity
    style= {allStyles.button}
    > 
    <Text style= {allStyles.butText}>+</Text>
    </TouchableOpacity> */}
        <ButtonR
          title='+'
          onPress={() => {
            navigation.navigate('Set_Task')
            // navigation.navigate('Camera_Page')
          }}
        // navigation={navigation}
        />
      </View>

      <View style={[allStyles.headerM, { flex: 1 }]}>
        <Text style={allStyles.listText}> Things we have focused on:</Text>
        <ButtonR
          title='c'
          onPress={() => {
            navigation.navigate('Camera_Page')
          }}
        />
      </View>
      <View style={{ flex: 6, borderColor: 'white' }}>
        {/* <Text>
          {`-${text}`}
        </Text> */}
        <MapView
          style={{ flex: 1, width: "100%" }}
          initialRegion= {region}
        />
        {/*    */}
      </View>

      <View style={[allStyles.headerM, { justifyContent: 'center' }, { width: '100%' }]}>
        <ButtonR
          style={{ aspectRatio: 2.7, borderBottomRightRadius: 0 }}
          title='Locate User'
          onPress={() => {
            navigation.navigate('location_Picker')
          }}
        />
        <ButtonR
          style={{
            aspectRatio: 2.7,
            borderBottomLeftRadius: 0,
            marginLeft: 3,
          }}
          title='Pick on Map'
          onPress={() => {
            navigation.navigate('Location_Map')
          }}
        />
      </View>
    </View>
  )
}

export default MainPage;
