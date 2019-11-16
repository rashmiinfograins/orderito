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
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Signup extends React.Component {
  static navigationOptions =
  {
     title: 'SignUp',
  };

    state = {choosenLabel: '', choosenindex: ''}
  
  render() {
    return (
        <ScrollView>
     <View style={styles.container}>
      <TextInput
      style = {styles.input_text}
      keyboardType={'default'}
      placeholder={'Full name'}
      placeholderTextColor={'#000'}
      onChangeText={text => onChangeText(text)}
    />
      <TextInput
      style = {styles.input_text}
      keyboardType={'default'}
      placeholder={'Email'}
      placeholderTextColor={'#000'}
      onChangeText={text => onChangeText(text)}
    />
    <View style = {styles.input_text}>
        <Picker selectedValue={this.state.choosenLabel}
          onValueChange={
          (itemValue, itemIndex) => this.setState({
               choosenLabel: itemValue, 
               choosenindex:itemIndex})
        }>
        <Picker.Item label="Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female"/>
        </Picker>
        </View>
        <View style = {styles.input_text}>
        <Picker selectedValue={this.state.choosenLabel}
          onValueChange={
          (itemValue, itemIndex) => this.setState({
               choosenLabel: itemValue, 
               choosenindex:itemIndex})
        }>
        <Picker.Item label="Select Country" value="" />
            <Picker.Item label="India" value="india" />
            <Picker.Item label="USA" value="usa"/>
            <Picker.Item label="UK" value="uk"/>
        </Picker>
        </View>
        <TextInput
            style = {styles.input_text}
            keyboardType={'number-pad'}
            placeholder={'Phone Number'}
            placeholderTextColor={'#000'}
            onChangeText={text => onChangeText(text)}
    />
     <TextInput
            style = {styles.input_text}
            placeholder={'Password'}
            placeholderTextColor={'#000'}
            onChangeText={text => onChangeText(text)}
    />
      <TextInput
            style = {styles.input_text}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#000'}
            onChangeText={text => onChangeText(text)}
    />
     <TouchableOpacity
              style={styles.signBtn}
              onPress={()=>this.props.navigation.navigate('OtpVerify')}>
            <Text style= {{color:'#fff',alignSelf:'center',paddingTop: 12, fontSize: 16}}>Sign in</Text>
          </TouchableOpacity>
          <Text style= {{color:'black',alignSelf:'center',fontSize:16, paddingTop:8,fontWeight:'bold', marginTop:30}}>────────    Or With   ────────</Text>
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
     </View>
     </ScrollView>
    )
  }
}

  const styles = StyleSheet.create({
      container:{
        flex: 1,
        alignItems: 'center', 
        marginHorizontal:30,
      },
      
      input_text : {
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
    }
  });
