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
  Image,
} from 'react-native';
import allStyles from '../components/allStyles';
import ButtonR from '../components/ButtonR';


function Page01({ width, navigation }) {
  
  const [text, setText] = useState('');
  return (
    <View
      style={allStyles.body}
    >
      <View style={allStyles.timer}>
        <Text style={allStyles.listText}
        > 
        {/* {Timer} */}
        </Text>
      </View>
      <View style= {styles.taskDes}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' }}
        />
        <Text> Focusing on: \n  </Text>
      </View>

      <View style={allStyles.dashLine}
      />
      <View style={allStyles.afterDash01}>
        <ButtonR style={{ title: '10', width: 70, borderRadius: 35 }} />
        <ButtonR style={{ title: '15', width: 70, borderRadius: 35 }} />
        <ButtonR style={{ title: '20', width: 70, borderRadius: 35 }} />
      </View>
      <View style={allStyles.afterDash02}>
        <ButtonR style={{ title: 'start', width: 70, borderRadius: 35 }} />
        <ButtonR style={{ title: '-', width: 70, borderRadius: 35 }} />
      </View>
      <View style={[allStyles.dashLine, style = { color: "white", width: "70%" }]} />

    </View>
  )
}
export default Page01;
