import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
;
// import icoMoonConfig from '../../assets/shareIcon/selection.json'</TouchableOpacity>)
;
// const CustomIcon = createIconSetFromIcoMoon(
//   icoMoonConfig,
//   'icomoon',
//   'icomoon.ttf',
// )</TouchableOpacity>)
;
export const Icon = ({type,onPress, ...props}) => {
  return(

    switch (type) {
      case 'antDesign':
        return   (<TouchableOpacity {...props}>
<AntDesign {...props} /> 
                 </TouchableOpacity>)
;
      case 'entypo':
        return   (<TouchableOpacity {...props}>
<Entypo {...props} /></TouchableOpacity>)
;
      case 'evilIcons':
        return   (<TouchableOpacity {...props}>
<EvilIcons {...props} /></TouchableOpacity>)
;
      case 'feather':
        return   (<TouchableOpacity {...props}>
<Feather {...props} /></TouchableOpacity>)
;
      case 'ionIcons':
        return   (<TouchableOpacity {...props}>
<Ionicons {...props} /></TouchableOpacity>)
;
      case 'materialIcons':
        return   (<TouchableOpacity {...props}>
<MaterialIcons {...props} /></TouchableOpacity>)
;
      case 'fontAwesome5':
        return   (<TouchableOpacity {...props}>
<FontAwesome5 {...props} /></TouchableOpacity>)
;
      case 'fontAwesome':
        return   (<TouchableOpacity {...props}>
<FontAwesome {...props} /></TouchableOpacity>)
;
      case 'materialCommunityIcons':
        return   (<TouchableOpacity {...props}>
<MaterialCommunityIcons {...props} /></TouchableOpacity>)
;

    // (<TouchableOpacity {...props}>
    // case 'custom':f
    //   return   (<TouchableOpacity {...props}>
// <CustomIcon {...props} /></TouchableOpacity>)
;
  }
  return   (<TouchableOpacity {...props}>
<FontAwesome {...props} />
  
</TouchableOpacity>)
}
;































































const ButtonR = ({title, onPress, ...props}) => {
    // const navigation = useNavigation()
    // const [count, setCount] = useState('');
    const count = "";
    const onPressA = () => {     
        if (!isNaN({title})) {
            JSON.parse(title)
           count += title
               }
           }
    return (
        <TouchableOpacity
       
            style={[allStyles.button, props.style]}
            onPress= {onPress && onPress || onPressA}
        >  
        <Text style={[allStyles.butText, props.style]}> {title} </Text> 
               
        </TouchableOpacity>
    )}
export default ButtonR;




export default function ImagePickerHandler({ }) {
    const [pickedImage, setPickedImage] = useState("")
  
    const loadCamera = useCallback(async () => {
      const image = await launchCameraAsync({
        // allowsEditing: true,
        // aspect: [16,9],
        // quality: 0.5,
      });
      // console.log(image)
      setPickedImage(image.uri);
  
    }, [])
    useEffect(() => {
      loadCamera()
  
    }, [])
  
    return (<TouchableOpacity
      style={[]}
    onPress={loadCamera}
    >
      {pickedImage ? <Image source={{uri : pickedImage}} style={{width:100 , height:100}}/> : <Text> ? </Text>}
    </TouchableOpacity>)
  }
































const ButtonR = (props) => {
    // const navigation = useNavigation()
    const [count, setCount] = useState('');
    return (
        <TouchableOpacity
       
            style={[allStyles.button, props.style]}
        >  
         <Text style={[allStyles.butText, props.style]}> {props.title} </Text>
         onPress={onPress && [props.onPress, onPress=() => {
                 JSON.parse({title})
               if (title !== NaN) {
                  setCount += {title}
               }
               }
                        ]}
        </TouchableOpacity>
    )}
export default ButtonR;









<Text style={[allStyles.butText, props.style]}> {title} </Text>
         onPress= { () => {if (onPress === defined) {props.onPress
         }else {onPress=() => {
                 JSON.parse(title)
               if (title !== NaN) {
                // setCount({title})
                  count += {title}
               }
               }
         }}
        }
        </TouchableOpacity>
    )}












