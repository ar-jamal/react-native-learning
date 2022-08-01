import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import allStyles from './allStyles';


const ButtonR = ({ title, onPress, source, children, ...props }) => {
    // const navigation = useNavigation()
    // const [count, setCount] = useState('');
    const count = "";
    const onPressA = () => {
        if (!isNaN({ title })) {
            JSON.parse(title)
            count += title
        }
    }
    return (
        <TouchableOpacity
            style={[allStyles.button, props.style]}
            onPress={onPress && onPress || onPressA}
        >
            {children || title && <Text style={[allStyles.butText]}> {title} </Text>}

        </TouchableOpacity>
    )
}
export default ButtonR;