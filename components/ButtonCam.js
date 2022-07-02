import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImagePickerIOS, Text, TouchableOpacity } from 'react-native';
import allStyles from './allStyles';


const ButtonCam = ({ title, onPress, ...props }) => {

    return (
        <TouchableOpacity

            style={[allStyles.button, props.style]}
            onPress={onPress}
        >
            pickedImage? <ImagePicker /> : <Text> ? </Text>


        </TouchableOpacity>
    )
}
export default ButtonCam;