import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import ListData from '../Callapi';
import {WebView} from 'react-native-webview';

const Tab = createBottomTabNavigator();
// const webmap = require('../Peta/map.html');
// const [isLoading, setLoading] = useState(true);

const formInput = 'https://shally593.github.io/pgpbl-12/';
const webmap = 'https://shally593.github.io/pgpbl-12/map.html';
// const jsonURL = 'https://script.google.com/macros/s/AKfycbzeDMPto8t24hT0SXlejD8yc-KNZ1cC7wyDqLn0hZGUMDuMmFe8eNks6bKljxk0K94YuA/exec'

function HomeScreen() {
    return (
        <View >
            <Text style = {styles.title}>
                APLIKASI PETA LOKASI OBJEK 
            </Text>
            <Text style = {{textAlign :'center'}}> Aplikasi nice tapi error dikit</Text>

        <View style = {styles.container}>
            <Text style = {styles.caption}>
                Stack :
            </Text>
            <Text style = {styles.list}>
                1. React Native 
            </Text>
            <Text style = {styles.list}>
                2. HTML 
            </Text >
            <Text style = {styles.list}>
                3. Leaflet JS 
            </Text>
            <Text style = {styles.list}>
                4. Google Spreadsheet 
            </Text>
            <Text style = {styles.list}>
                5. Font Awesome 
            </Text>
            <Text style = {styles.list}>
                6. Github  
            </Text>
        </View>
        </View>
    );
}

function MapsScreen() {
    return (
    <WebView
    source={{uri : webmap}}
    />
    );
}

function AddDataScreen() {
    return (
    <WebView
    source={{uri : formInput}}
    />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}

function ListScreen() {
    return (
        <View>
            <ListData/>
        </View>
    );
}

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
        
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Map" component={MapsScreen} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Input Data" component={AddDataScreen} options={{
        tabBarLabel: 'Input Data',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="plus-circle" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="List Data" component={ListScreen} options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 250,
        resizeMode : 'stretch',
    },
    listitems :{
        padding: 10,
        alignItems : 'center',
    },
    caption: {
        fontSize: 16,
        fontWeight : 'bold',
        color: '#000'
    },
    title: {
        fontSize: 25,
        fontWeight : 'bold',
        color: '#000',
        textAlign : 'center',
        marginTop : 10
    },
    container: {
        marginHorizontal : 20,
        marginTop : 20,
        padding : 20,
        backgroundColor : 'white'
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
    },
});