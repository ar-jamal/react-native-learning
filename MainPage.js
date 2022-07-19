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
import MapView, { Marker } from 'react-native-maps';
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
  const [pickedImage, setPickedImage] = useState('')



  useEffect(() => {
    setLatLng({
      lat: pickedLat,
      lng: pickedLng
    })
  }, [pickedLat, pickedLng])

  useEffect(() => {
    const pickedImage = route.params?.pickedImage ?? '';
    setPickedImage(pickedImage)
  }, [pickedImage, route])

  return (
    <View
      style={allStyles.body}
    >
      <View style={[allStyles.headerM, { flex: .5 }]}>
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
        >
        {!!pickedImage && <Image
          style={{ width: 50, aspectRatio: 1 }}
          source={{ uri: pickedImage }} />}
        </ButtonR>
      </View>
      <View style={{
        flex: 6, borderColor: 'white', borderWidth: 1, width: '92%',
        alignItems: 'center', justifyContent: 'center'
      }}>
        {/* <Text>
          {`-${text}`}
        </Text> */}
        {(!!latLng.lat && <MapView
          style={{ flex: 1, width: "100%", borderWidth: 2 }}
          initialRegion={{
            latitude: latLng.lat,
            longitude: latLng.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            title='jamal'
            coordinate={{
              latitude: latLng.lat,
              longitude: latLng.lng,
            }}
          />
        </MapView>)
          || <Text style={{ color: 'white', fontSize: 16 }}
          > Kindly pick your Location
          </Text>}
      </View>

      <View style={[allStyles.headerM, { marginBottom: 10 }, { marginTop: 20 },
      { justifyContent: 'center' }, { width: '100%' }
      ]}>
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
