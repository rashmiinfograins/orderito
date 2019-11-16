/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  Modal,

  TouchableHighlight,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';




export default class Qr extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}

  state = {
    modalVisible: false, //state of modal default false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    
    return (
     <View style={styles.container}>
       <Image source={require('./assets/sample.png')} style={{width: 300, height: 300}} />
       <View >
        <Text style={{marginTop:10,textAlign:'center',fontSize:25,fontWeight:'bold'}}>Scan the Qr Code to start</Text>
        </View>
           <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Home')}>
            <Text style= {{color:'#fff',alignSelf:'center',fontSize:18,paddingTop:12}}>Continue</Text>
          </TouchableOpacity>
     </View>
    )
  }
}

  const styles = StyleSheet.create({
      container:{
        flex: 1,
        alignItems: 'center', 
        marginHorizontal:30,
        marginTop:80,
      },

      button:{
        borderRadius:30,
        height:50,
        width:'100%',
        marginTop:30,
        backgroundColor:'#000'
      },
      signBtn:{
        borderRadius:30,
        height:50,
        width:'100%',
        borderWidth: 2,
        marginTop:20
      },
      close_icon:{
        fontSize:50,
        width:'100%'
      },
      desc_text:{
        textAlign:'center',
        fontSize:20,
        padding:30
      },
      send_pwd_btn:{
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:20,
        backgroundColor:'#000'
      },
      text_desc:{
        textAlign:"center",
       // padding:30,
        //marginTop:16,
        fontSize:18
      },
  });
