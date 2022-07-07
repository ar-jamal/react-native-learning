import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import icoMoonConfig from '../../assets/shareIcon/selection.json';
// const CustomIcon = createIconSetFromIcoMoon(
//   icoMoonConfig,
//   'icomoon',
//   'icomoon.ttf',
// );
export const Icon = ({ type, onPress, ...props }) => {
  // return <AntDesign {...props} />
  // const [I, setI] = useState('');
  let Component;
  switch (type) {
    // case I :
    //   Component = setI (json.parse(type))
    //   break;
    case 'antDesign':
      Component = AntDesign
      break;
    case 'entypo':
      Component = Entypo
      break;
    case 'evilIcons':
      Component = EvilIcons
      break;
    case 'feather':
      Component = Feather
      break;
    case 'ionIcons':
      Component = Ionicons
      break;
    case 'materialIcons':
      Component = MaterialIcons
      break;
    // case 'fontAwesome5':
    //   Component = FontAwesome5
    //   break; 
    case 'fontAwesome':
      Component = FontAwesome
      break;
    case 'materialCommunityIcons':
      Component = MaterialCommunityIcons
      break;
    default:
      Component = FontAwesome;
      break;
  }
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>
      <Component {...props} />
    </TouchableOpacity>
  }
  return <Component {...props} />

};
