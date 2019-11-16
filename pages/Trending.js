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

import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-search-bar';
import SegmentedControlTab from "react-native-segmented-control-tab";
export default class Trending extends React.Component {
 
  
    render() {
      const { search } = this.state;


      return (
        <View style={styles.container}>
       <Text>Trending</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      marginHorizontal: 30,
    },
    
    
});

