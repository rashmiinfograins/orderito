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
  Animated
  
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




export default class splash extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
           header: () => null
        } 
    }

    constructor() {
        super();
        this.state = {
          animating: false,
          align: 'center',
          alignsecond: false,
        };
        setTimeout(
          () =>
            this.setState({ align: 'flex-start' }, function() {
              this.setState({
                alignsecond: true,
              });
            }),
          3000
        );
      }
     
      render() {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: this.state.align,
              marginHorizontal: 40,
            }}>
            <Image
              source={{
                uri:
                  './assets/splash.png',
              }}
              style={{ width: 100, height: 100 }}
            />
            {!this.state.alignsecond ? null : (
              <View style={{ margin: 10 }}>
                <Text
                  style={{ color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
                  About React
                </Text>
              </View>
            )}
          </View>
        );
      }
    }
    