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
  Text,
  StatusBar,
  TabScreen,
  Animated
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


import Start from './pages/Start';
import Signup from './pages/Signup';
import OtpVerify from './pages/OtpVerify';
import Login from './pages/Login';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Desserts from './pages/Desserts';
import Trending from './pages/Trending';
import Exclusive from './pages/Exclusive';
import Qr from './pages/Qr';
import splash from './pages/splash';




export default class App extends React.Component {

  state = {
    height: new Animated.Value(600), // Initial value for opacity: 0
    width: new Animated.Value(360), // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
    setTimeout(function() {
      alert('Go to next Screen');
    }, 12000);
  }


  render() {
    const Routes = createStackNavigator({
      Start: {screen: Start},
      Signup:{screen: Signup},
      OtpVerify:{screen: OtpVerify},
      Login:{screen: Login},
      Home:{screen: Home},
      Meals:{screen: Meals},
      Desserts:{screen: Desserts},
      Trending:{screen: Trending},
      Exclusive:{screen: Exclusive},
      Qr:{screen: Qr},
      splash:{screen: splash},
    })
    
    
    
    const Root =  createAppContainer(Routes);
    return (
      <Root/>
    );
  }
}