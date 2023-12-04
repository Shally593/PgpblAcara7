import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Teman from '../Getdata';
import ListData from '../Callapi';
import {WebView} from 'react-native-webview';

const Tab = createBottomTabNavigator();
// const webmap = require('../Peta/map.html');
// const [isLoading, setLoading] = useState(true);

const formInput = 'https://shally593.github.io/pgpbl-responsi/';
const webmap = 'https://shally593.github.io/pgpbl-responsi/map.html';

// function HomeScreen() {
//     return (
//         <View>
//             <Text style = {styles.title}>
//                 APLIKASI PETA LOKASI OBJEK 
//             </Text>
//             <Text style = {{textAlign :'center'}}> Aplikasi nice tapi error dikit</Text>

//             <View style = {styles.container}>
//                 <Text style = {styles.text}>
//                     Stack :
//                 </Text>
//                 <Text >
//                     1. React Native 
//                 </Text>
//                 <Text >
//                     2. HTML 
//                 </Text >
//                 <Text >
//                     3. Leaflet JS 
//                 </Text>
//                 <Text >
//                     4. Google Spreadsheet 
//                 </Text>
//                 <Text >
//                     5. Font Awesome 
//                 </Text>
//                 <Text >
//                     6. Github  
//                 </Text>
//             </View>
//         </View>
//     );
// }

function HomeScreen() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>GREEN PULSE APP</Text>
                <Text style = {{textAlign :'center'}}> Temukan, Kolaborasi, dan Dukung Pengelolaan Sampah yang Berkelanjutan di Surabaya</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Green Pulse App merupakan aplikasi tematik berbasis spasial yang dirancang untuk memberikan informasi sebaran lokasi objek pengolahan sampak di Surabaya dan sekitarnya. 
                        Aplikasi didesain untuk memudahkan para pengguna dengan cepat menemukan pusat - pusat daur ulang dan tempat pembuangan sampah.</Text>
                        
                    <Text style={styles.text}>

                        Fitur Unggulan dari Green Pulse App antara lain : </Text>
                        
                    <Text style={styles.text}>
                        1. Kolaboratif 
                            Selain mendapatkan informasi mengenai sebaran lokasi pengelolaan sampah di Surabaya dan sekitarnya, 
                            pengguna juga dapat secara kolaboratif ikut serta dalam menambahkan data dengan fitur yang disajikan oleh Green Pulse App. 
                            Fitur kolaboratif ini memungkinkan pengguna untuk memberikan pembaruan langsung terkait status tempat pengolahan sampah, jenis sampah yang diterima, 
                            atau informasi lain yang dapat bermanfaat bagi pengguna lain. </Text>

                    <Text style={styles.text}>
                        2. Pemetaan Interaktif 
                            Aplikasi dilengkapi dengan fitur spasial yang memudahkan pengguna dalam menggunakannya. Pengguna dapat menemukan lokasi - lokasi pengelolaan sampah dalam Tab - List Data. 
                            Pengguna dapat menggunakan fitur Add Data untuk menambahkan data mengenai lokasi bersangkutan. Selanjutnya pengguna dapat menggunakan fitur navigasi dalam list data untuk
                            mengetahui lebih lengkapi rute menuju lokasi tersebut melalui Google Maps. Bagi pengguna yang memiliki preferensi basemap dari tampilan map yang digunakan,
                            terdapat fitur 'Change Base Map' yang dapat diatur saat melihat sebaran lokasi bersangkutan.    </Text>

                </View>
                {/* <View style={styles.container}>

                    <Text style={styles.stack}>Stack : </Text>
                    <Text style={styles.stack}>1. React Native</Text>
                    <Text style={styles.stack}>2. HTML</Text>
                    <Text style={styles.stack}>3. LeafletJS</Text>
                    <Text style={styles.stack}>4. Google Spreadsheet</Text>
                    <Text style={styles.stack}>5. Apps Script</Text>
                    <Text style={styles.stack}>6. FontAwesome5</Text>
                    <Text style={styles.stack}>7. GitHub</Text>
                </View> */}
            </View>
 
        </ScrollView>
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

function ListScreen() {
    return (
        <View>
            <ListData/>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}

// function TemanScreen() {
//     return (
//         <View>
//             <Teman/>
//         </View>
//     );
// }

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#E2C799', // Warna saat tab aktif
        tabBarInactiveTintColor: '#F5F5DC', // Warna saat tab tidak aktif
        tabBarStyle: {
            bottom: 20, //
            borderRadius: 25, 
            left: 20, 
            right: 20, 
            height: 50, 
            position: 'absolute', 
            backgroundColor: '#004225', // Warna latar belakang tab bar
    }}} >
        
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

            <Fontawesome5 name="map-marker-alt" color={color} size={size}/>
        ),
        }}
    />
      <Tab.Screen name="Add Data" component={AddDataScreen} options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus" color={color} size={size}/>

        ),
        }}
    />
      <Tab.Screen name="List Data" component={ListScreen} options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="list-alt" color={color} size={size}/>
        ),
        }}
    />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'User',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    />
        {/* <Tab.Screen name="Teman" component={TemanScreen} options={{
        tabBarLabel: 'Friends',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size}/>
        ),
        }}
    /> */}
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
    text: {
        fontSize: 15,
        textAlign: 'justify',

    },
    container: {
        marginHorizontal : 20,
        marginTop : 20,
        padding : 20,
        backgroundColor : 'white',
        justifyContent : 'left'

    },

    center: {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1

    },
    // add: {
    //     marginBottom : 20,
    //     },
    
    card: {
        flexDirection: 'row',
        padding: 20,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
    },
});