/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  ToastAndroid,
  SegmentedControlIOS,
  
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
// import Offer from './Offer';
// import MyOrder from './MyOrder';
// import Notification from './Notification';
import MyProfile from './MyProfile';



import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-search-bar';
import SegmentedControlTab from "react-native-segmented-control-tab";



const HomeStack = createStackNavigator(
    {
      //Defination of Navigaton from home screen
      Home: { screen: Home },
    },
    {
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
        title: 'Home',
        //Header title
      },
     
    }
  );

 

  // const OfferStack = createStackNavigator(
  //   {
  //     //Defination of Navigaton from setting screen
  //     Offer: { screen: Offer },
  //   },
  //   {
  //     defaultNavigationOptions: {
  //       //Header customization of the perticular Screen
  //       headerStyle: {
  //         backgroundColor: '#42f44b',
  //       },
  //       headerTintColor: '#FFFFFF',
  //       title: 'Offer',
  //       //Header title
  //     },
  //   }
  // );

  // const MyOrderStack = createStackNavigator(
  //   {
  //     //Defination of Navigaton from setting screen
  //     MyOrder: { screen: MyOrder },
  //   },
  //   {
  //     defaultNavigationOptions: {
  //       //Header customization of the perticular Screen
  //       headerStyle: {
  //         backgroundColor: '#42f44b',
  //       },
  //       headerTintColor: '#FFFFFF',
  //       title: 'MyOrder',
  //       //Header title
  //     },
  //   }
  // );

  // const NotificationStack = createStackNavigator(
  //   {
  //     //Defination of Navigaton from setting screen
  //     Notification: { screen: Notification },
  //   },
  //   {
  //     defaultNavigationOptions: {
  //       //Header customization of the perticular Screen
  //       headerStyle: {
  //         backgroundColor: '#42f44b',
  //       },
  //       headerTintColor: '#FFFFFF',
  //       title: 'Notification',
  //       //Header title
  //     },
  //   }
  // );

  const MyProfileStack = createStackNavigator(
    {
      //Defination of Navigaton from setting screen
      MyProfile: { screen: MyProfile },
    },
    {
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
        title: 'MyProfile',
        //Header title
      },
    }
  );

  const Tab = createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      // Offer: { screen: OfferStack },
      // MyOrder: { screen: MyOrderStack },
      // Notification: { screen: NotificationStack },
      MyProfile: { screen: MyProfileStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } 
          // else if (routeName === 'MyOrder') {
          //   iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          // }
          // else if (routeName === 'Offer') {
          //   iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          // }
          // else if (routeName === 'Notification') {
          //   iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          // }
          else if (routeName === 'MyProfile') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
        
       
      }),
      tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
      },

      
    }

   
  );
  
  export default createAppContainer(Tab);
  
   navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}
  
  //   export default class App extends React.Component {
  //   render() {
  //     const Routes = createStackNavigator({
        
  //       Start: {screen: Start},
  //       Login: {screen: Login},
  //       Signup: {screen: Signup},
  //       ForgotPwd: {screen: ForgotPwd},
  //       OtpVerify: {screen: OtpVerify},
  //       Home: {screen: Home},
  //       MyProfile: {screen: MyProfile},
  //     });
      
  //     const Root =  createAppContainer(Routes);
  //     return (
  //       <Root/>
  //     );
  //   }
  // }
  
  