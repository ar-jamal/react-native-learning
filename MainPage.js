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


function MainPage({ width, navigation }) {
  const [text, setText] = useState('')

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
            navigation.navigate('setTask')
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
      <View style={{ flex: 6 }}>

        <Text>
          {`-${text}`}
        </Text>
      </View>

      <View style={[allStyles.headerM, { justifyContent: 'space-evenly' }, { flex: 1 }, ]}>
        <ButtonR
          style={{ aspectRatio: 2.7 }}
          title='Locate User'
          onPress={() => {
            navigation.navigate('location_Picker')
          }}
        />
        <ButtonR
          style={{ aspectRatio: 2.7 }}
          title='PicK on Map'
          onPress={() => {
            navigation.navigate('Pick_OnMap')
          }}
        />
      </View>


    </View>
  )
}

export default MainPage;
