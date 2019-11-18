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
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'


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
import Item_detail from './pages/Item_detail';
import Tab from './pages/Tab';
import MyProfile from './pages/MyProfile';
// import MyOrder from './pages/MyOrder';
// import Notification from './pages/Notification';
// import Offer from './pages/Offer';


// export default createAppContainer(App);
export default class App extends React.Component {
  

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
      Item_detail:{screen: Item_detail},
      Tab:{screen: Tab},
      MyProfile:{screen: MyProfile},
      // MyOrder:{screen: MyOrder},
      // Notification:{screen: Notification},
      // Offer:{screen: Offer},
    })
    

    const Root =  createAppContainer(Routes);
    return (
      <Root/>
    );
  }

    

}