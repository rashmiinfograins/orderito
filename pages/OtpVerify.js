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
  Icon,
  TouchableHighlight,
  StatusBar,
  TextInput,
  Alert,
  Picker,
  ToastAndroid,
  
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default class OtpVerify extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}
  
    constructor(props){
        super(props);
        this.state={
            phone: '',
            password: ''
        }
        
    }
    
  render() {
    return (
     <View style={styles.container}>
      <Image source={require('./assets/otp.png')} style={{width: 150, height: 100}} />
      <Text style={styles.text_desc}>OTP has been sent to you on your mobile phone. Please enter it below.</Text>

      <OTPInputView
        style={{width: '80%', height: 180}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled = {(code => {
            console.log(`Code is ${code}, you are good to go!`)
        })}
    />
      <TouchableOpacity 
      style={styles.signin_btn} 
      onPress={()=>this.props.navigation.navigate('Qr')}>
          <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 16}}>VERIFY</Text>
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
        marginTop:60,
      },

      text_desc:{
        textAlign:"center",
        padding:30,
        marginTop:16,
        fontSize:18
      },
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "black",
      },
    
      underlineStyleHighLighted: {
        borderColor: "black",
      },

      borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "black",
      },
      signin_btn: {
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:5,
        backgroundColor:'#000'
    },
  });
