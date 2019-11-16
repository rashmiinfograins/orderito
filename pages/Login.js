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
  Picker,
  ToastAndroid,
  
} from 'react-native';
import Icon from 'react-native-ionicons'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { createStackNavigator, createAppContainer } from "react-navigation";
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default class Login extends React.Component {

  static navigationOptions =
  {
     title: 'Sign In',
  };
    // constructor(props){
    //     super(props);
    //     this.state={
    //         phone: '',
    //         password: ''
    //     }
    // }

   
    state = {
      modalVisible: false, //state of modal default false
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

 //Navigation option to create menu in header
//  static navigationOptions = ({ navigation }) => {
//   return {
//     //Heading/title of the header
//     title: navigation.getParam('Title', 'Sign In'),
//     //Heading style
//     headerStyle: {
//      // backgroundColor: navigation.getParam('BackgroundColor', 'black'),
//       textAlign: 'center',
//     },
//     headerTitleStyle:{ textAlign: 'center', width:'100%'},
    
//     //Heading text color
//     headerTintColor: navigation.getParam('HeaderTintColor', '#000'),
//    // headerRight: (
//       // <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
//       //    <Icon name="cart"/>
//       // </TouchableOpacity>
//     //),
//     // headerLeft: (
//     //   <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
//     //     <Image source={require('./assets/special.png')} style={{width: 30, height: 30,paddingRight:5,}}/>
//     //   </TouchableOpacity>
//     // ),
//   };
// }; 
    
  render() {
    return (
     <View style={styles.container}>
      <TextInput
      style = {styles.input_text}
      keyboardType={'default'}
      placeholder={'Email'}
      placeholderTextColor={'#000'}
      onChangeText={text => onChangeText(text)}
    />
    <TextInput
        style = {styles.input_pass}
        placeholder={'Password'}
        placeholderTextColor={'#000'}
        onChangeText={text => onChangeText(text)}
    />
      <TouchableOpacity
              style={styles.signBtn}
              onPress={()=>this.props.navigation.navigate('OtpVerify')}>
            <Text style= {{color:'#fff',alignSelf:'center',paddingTop: 12, fontSize: 16}}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgot_btn} onPress={() => {this.setModalVisible(true);}}>
                <Text style={{color: '#000', alignSelf:'center', paddingTop: 8, fontSize: 16}}>Forgot Password ?</Text>
            </TouchableOpacity>
            <View style ={{flex:1,flexDirection:'row'}}>
        <Text style={{marginTop:40,textAlign:'center',fontSize:15,fontWeight:"bold"}}>By Sign you agree with orderito Terms and condition</Text>
      </View>
            <View>
            <Modal
           
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.container}>
            <View>
                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                  <Icon name="close" size={24} color="#000"  style={styles.close_icon} />
                </TouchableHighlight>
                </View>
                <Image source={require('./assets/forgot.png')} style={{width: 100, height: 100}}/>
                    <Text style={{fontSize:25, fontWeight:'bold', paddingTop:20}}>Forgot</Text>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>Your Password</Text>
                    <Text style={styles.desc_text}>Enter your email below  to receive the instructions to reset your password</Text>
                    <TextInput
                      style={{width:'100%', height: 50,textAlign:'center', fontSize:20 ,backgroundColor:'lightgray',borderRadius:30}}
                      keyboardType={'email-address'}
                      placeholder={'Enter your email'}
                      placeholderTextColor={'#000'}
                      onChangeText={text => { this.setState({ phone: text }) }}
                  />
                   <TouchableOpacity style={styles.send_pwd_btn} onPress={() => this.props.navigation.navigate('Signup')}>
                      <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 18}}>Send Password</Text>
                  </TouchableOpacity>
            </View>
        </Modal>
     
        </View>
     </View>
     
    )
  }
}

  const styles = StyleSheet.create({
      container:{
        flex: 1,
        alignItems: 'center', 
        marginHorizontal:60,
      },
      input_text : {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        width: '100%',
        borderRadius:20,
        paddingLeft: 16,
        marginTop:80
    },
    input_pass:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        width: '100%',
        borderRadius:20,
        paddingLeft: 16,
        marginTop:20
    },
    signBtn:{
        borderRadius:20,
        height:50,
        width:'100%',
        marginTop:20,
        backgroundColor:'#000'
    },
    close_icon:{
      fontSize:30,
      width:'100%',
      marginTop:30
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
