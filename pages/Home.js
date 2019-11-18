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
  ActivityIndicator,
  FlatList,
  Alert,
  ListView,
  Dimensions,
  
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
//import Tabbar from 'react-native-tabbar-bottom'



export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
    this.state = {
      page: "Home",
    }


    // this.state1 = {
    //   page: "Home",
    // }

    this.state = {
      FlatListItems: [
         { id: '1', value: 'special thali' },{ id: '2', value: 'special thali' },{ id: '3', value: 'special thali' },
         { id: '4', value: 'special thali' },{ id: '5', value: 'special thali' },{ id: '6', value: 'special thali' },
         { id: '7', value: 'special thali' },{ id: '8', value: 'special thali' },{ id: '9', value: 'special thali' },
         { id: '10', value: 'special thali' },{ id: '11', value: 'special thali' },{ id: '12', value: 'special thali' },
         { id: '13', value: 'special thali' },{ id: '14', value: 'special thali' },{ id: '15', value: 'special thali' },
         { id: '16', value: 'special thali' },{ id: '17', value: 'special thali' },{ id: '18', value: 'special thali' },
         { id: '19', value: 'special thali' },{ id: '20', value: 'special thali' },{ id: '21', value: 'special thali' },
         { id: '22', value: 'special thali' },{ id: '23', value: 'special thali' },{ id: '24', value: 'special thali' },
         { id: '25', value: 'special thali' },{ id: '26', value: 'special thali' }],
    };

    }

    FlatListItemSeparator = () => {
      return (
        //Item Separator
        <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
      );
    };

    GetItem(item) {
      //Function for click on an item
      Alert.alert(item);
    }

   ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

 
  componentDidMount() {
    this.makeRemoteRequest();
  }

  // makeRemoteRequest = () => {
  //   const { page, seed } = this.state;
  //   const url = `http://3.16.159.2/janSpor/public/api/event-list'`;
  //   this.setState({ loading: true });
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         data: page === 1 ? res.results : [...this.state.data, ...res.results],
  //         error: res.error || null,
  //         loading: false,
  //         refreshing: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
 // };
 
 
  //For search api //
    componentDidMount() {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
            },
            function() {
              this.arrayholder = responseJson;
            }
          );
        })
        .catch(error => {
          console.error(error);
        });
    }


    search = text => {
      console.log(text);
    };
    clear = () => {
      this.search.clear();
    };

//for search filter function //
    SearchFilterFunction(text) {
      //passing the inserted text in textinput
      const newData = this.arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: newData,
        search:text,
      });
    }
 

    //list view seprator //
    ListViewItemSeparator = () => {
      //Item sparator view
      return (
        <View
          style={{
            height: 0.3,
            width: '90%',
            backgroundColor: '#080808',
          }}
        />
      );
    };



  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Select Your Food'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'black'),
        textAlign: 'center',
      },
      headerTitleStyle:{ textAlign: 'center', width:'100%'},
      
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
           <Icon name="cart"/>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
          <Image source={require('./assets/special.png')} style={{width: 30, height: 30,paddingRight:5,}}/>
        </TouchableOpacity>
      ),
    };
  }; 

  
  render() {
    const { navigation:navigate } = this.props;
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
      
    }

//for segmentation 
    // var myloop = [];
    // for (let i = 0; i < 10; i++) {
    //   myloop.push(
    //     <View key={i}>
    //     <Text>{i}</Text>
    //     </View>
    //   );
    // }

    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          />
    <View>
    <View style = { styles.scrollViewHolder } >
        <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
          <Text style = { styles.item } onPress={() => navigation.navigate('Meals')}>Meals</Text>
          <View style = { styles.separator }/>
          <Text style = { styles.item } onPress={() => navigation.navigate('Desserts')}>Desserts</Text>
          <View style = { styles.separator }/>
          <Text style = { styles.item } onPress={() => navigation.navigate('Trending')}>Trending</Text>
          <View style = { styles.separator }/>
          <Text style = { styles.item } onPress={() => navigation.navigate('Exclusive')}>Exclusive</Text>
          </ScrollView>
          </View>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity
              onPress={this.onPress}>
              <Text style= {{marginLeft:5,marginRight:10,fontSize:18, fontWeight:'bold',}}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.onPress}>
                <Text style= {{marginLeft:60,marginRight:10,fontSize:18, fontWeight:'bold',}}>Switch Table</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.onPress}>
               <Text style= {{marginLeft:60,marginRight:5,fontSize:18, fontWeight:'bold',}}>Short by</Text>
          </TouchableOpacity>
       </View>
        <View style={{marginTop:40}}>
          <FlatList
          roundAvatar
              data={this.state.FlatListItems}
              
              //data defined in constructor
              ItemSeparatorComponent={this.FlatListItemSeparator}
              //Item Separator View
              renderItem={({ item }) => (
                // Single Comes here which will be repeatative for the FlatListItems
                <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, marginLeft:20,}} >
                    <Image source={require('./assets/oderito-logo.png')} style={{width: 70, height: 70, borderRadius:70,backgroundColor:'grey',marginBottom:10}} />
                    <View style={styles.itemBlock}>
                    <Text
                      style={styles.itemName}
                      onPress={this.GetItem.bind(this, 'Id : '+item.id+' Value : '+item.value)}>
                      {item.value}
                    </Text>
                    {/* <View>
                    <Text>3*</Text>
                    </View> */}
                    <Text style={styles.itemLastMessage} onPress={() => navigation.navigate('Item_detail')}>Vindhyachal</Text>
                    <Text style={styles.itemLastMessage}>Rs.80.00</Text>
                    </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
     
        <View>
          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          Item Separator View
        //   renderItem={({ item }) => (
        //     //Single Comes here which will be repeatative for the FlatListItems
        //    <Text style={styles.textStyle}>{item.title}</Text>
        //  )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
        {/* <View style={styles.container_bottom}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "Home" && <Text>Screen1</Text>}
        {this.state.page === "Desserts" && <Text>Screen2</Text>}
        {this.state.page === "Meals" && <Text>Screen3</Text>}
        {this.state.page === "Trending" && <Text>Screen4</Text>}
        {this.state.page === "Exclusive" && <Text>Screen5</Text>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "Home",
              icon: "home",
            },
            {
              page: "Desserts",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "Meals",
              icon: "person",
            },
            {
              page: "Trending",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "Exclusive",
              icon: "search",
            },
          ]}
        />
      </View> */}
    </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      marginHorizontal: 30,
      height:'100%'
    },
    tabsContainerStyle:{
      borderBottomColor:'black',
      backgroundColor:'black',
    },
    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor:'white',
      marginTop: Platform.OS == 'ios'? 30 : 0
    },
    viewStyleOne: {
      justifyContent: 'center',
      alignItems:'center', 
      backgroundColor:'#b642f4',
      flexDirection:"row"
    },
    textStyle:{
      textAlign:'center'
    },
    scrollViewHolder:
   {
      // borderTopWidth: 2,
      borderBottomWidth: 2,
      borderTopColor: 'rgba(0,0,0,0.5)',
      borderBottomColor: 'rgba(0,0,0,0.5)'
   },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
   separator:
   {
      width: 2,
      backgroundColor: 'rgba(0,0,0,0.5)'
   },
   itemBlock:{
     padding:10,
   },
   container_bottom:{
     flex:1,
   }
});

