import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import allStyles from './utils/allStyles';
import ButtonR from './utils/cusComponents/roundButton';


const App = ({width}) => {
  const [text, setText] = useState('')
return (
  <View
  style= {allStyles.body}
  >
    <View style= {allStyles.headerM}>
    <TextInput
      style= {allStyles.input}
      placeholder= 'what would you like to focus on?'
      placeholderTextColor='blue'
      
      multiline= {true}
      // value= {text}
      onChangeText= {value => {setText(value)} }
    />
    {/* <TouchableOpacity
    style= {allStyles.button}
    > 
    <Text style= {allStyles.butText}>+</Text>
    </TouchableOpacity> */}
    <ButtonR
      title= '+'
    />
    </View>
    <View>
      <Text style= {allStyles.listText}> Things we have focused on:</Text>
      <Text>
        {`-${text}`}
      </Text>
    </View>
    
  </View>
)}

export default App;
