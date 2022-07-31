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


function PlaceForm({ navigation, route }) {

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
      <TextInput
        style={allStyles.input}
        label='what would you like to focus on?'
        // placeholderTextColor='blue'
        multiline={true}
        // value= {text}
        onChangeText={value => { setText(value) }}
      />
      <Text style={allStyles.listText}> Things we have focused on:</Text>
      <ButtonR
        style={{ borderRadius: 0, height: 120 }}
        title='c'
        onPress={() => {
          navigation.navigate('Camera_Page')
        }}
      >
        {!!pickedImage && <Image
          style={{ width: 50, aspectRatio: 1 }}
          source={{ uri: pickedImage }} />}
      </ButtonR>
      <View style={{
        flex: 4, borderColor: 'white', borderWidth: 1, width: '100%',
        alignItems: 'center', justifyContent: 'center', marginVertical: 12,
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
          ||
        <Text style={{ color: 'white', fontSize: 16 }}
        > Kindly pick your Location
        </Text>}
      </View>

      <View style={[allStyles.headerM, { marginBottom: 12 }, { marginTop: 16 },
      { justifyContent: 'center' }, { width: '100%' }
      ]}>
        <ButtonR
          style={{ aspectRatio: 2.7, borderBottomRightRadius: 0 }}
          title='Add Location'
          onPress={null}
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

export default PlaceForm;
