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


export default class Start extends React.Component {
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
       <Image source={require('./assets/oderito-logo.png')} style={{width: 230, height: 90}} />
           <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style= {{color:'#fff',alignSelf:'center',fontSize:18,paddingTop:12}}>Sign Up Now!</Text>
          </TouchableOpacity>

           <TouchableOpacity
              style={styles.signBtn}
              onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style= {{color:'black',alignSelf:'center',fontSize:18, paddingTop:12}}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgot_btn} onPress={() => {this.setModalVisible(true);}}>
                <Text style={{color: '#000', alignSelf: 'center', paddingTop: 8, fontSize: 16}}>Forgot Password ?</Text>
            </TouchableOpacity>
          <TouchableOpacity
              style={styles.forget_btn}
             >
            <Text style= {{color:'black',alignSelf:'center',fontSize:16, paddingTop:8,fontWeight:'bold', marginTop:30}}>────────    Or With   ────────</Text>
          </TouchableOpacity>
          <View style ={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity
              onPress={this.onPress}>
              <Image source={require('./assets/fb-128.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.onPress}>
              <Image source={require('./assets/insta128.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.onPress}>
              <Image source={require('./assets/g128.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
         
       </View>
       <View style ={{flex:1,flexDirection:'row'}}>
        <Text style={{marginTop:0,textAlign:'center',fontSize:15,fontWeight:"bold"}}>By Sign you agree with orderito Terms and condition</Text>
      </View>

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
                  <Icon name="close" size={24} color="#000" />
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

      button:{
        borderRadius:30,
        height:50,
        width:'100%',
        marginTop:60,
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
        fontSize:60,
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
