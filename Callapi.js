import React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet,  Button, Alert, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context'
import {useEffect, useState} from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Callapi = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbwQ6Sm0fBFv1GVmohay5oEiFUuuLRrZQiSNSxDnacpbbwkMx04GhRceAzOQUs5J0KjT1w/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

//   function deleteData(id) {
//     fetch(jsonUrl + '/' + id, {
//       method: 'DELETE',
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//           alert('Data terhapus');
//           refreshPage();
//         })
//  } 

//   const handleDelete = (id) => {
//     // Panggil API atau layanan untuk menghapus data
//     const deleteUrl = `https://script.google.com/macros/s/AKfycbzeDMPto8t24hT0SXlejD8yc-KNZ1cC7wyDqLn0hZGUMDuMmFe8eNks6bKljxk0K94YuA/exec/${id}`;

//     fetch(deleteUrl, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           // Data berhasil dihapus, perbarui tampilan dengan mengambil data baru
//           refreshPage();
//         } else {
//           console.error('Gagal menghapus data');
//         }
//       })
//       .catch(error => console.error(error));
//   };

  return (
    <SafeAreaView>
      {/* <Text style={styles.title}>List Data Pengguna</Text> */}
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={dataUser}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (

              // <View style={styles.card}>
              // {/* Konten Data */}
              // <TouchableOpacity onPress={() => handleDelete(item.id)}>
              //   <FontAwesome5 name="trash" size={17} color="red" />
              // </TouchableOpacity>

              <View>
              <View style={styles.card}>
                <View>
                  <Text style={styles.cardtitle}>{item.nama}</Text>
                  <Text>Jenis : {item.jenis}</Text>
                  <Text>Alamat : {item.alamat}</Text>
                  <Text>{item.latitude}, {item.longitude}</Text>
                </View>
              </View>

              {/* <View style={styles.form}>
              <Button title="Hapus"
                onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                { text: 'Tidak', onPress: () => console.log('button tidak') },
                { text: 'Ya', onPress: () => deleteData(item.id) },
                ])}
                color={'red'}
                />
              </View> */}

              {/* <View >
              <Button title = "Lokasi"
                onPress={() => Linking.openURL ('google.navigation:q='+(item.latitude)+','+(item.longitude))}
                color={'green'}
                style={{ borderRadius: 50 }}
                titleStyle={{ color: '#E2C799' }}
                />
              </View> */}

            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  borderRadius: 25,
                  justifyContent : 'center',
                  marginLeft : 15, 
                  marginRight : 15,
                  padding: 10, // Atur padding sesuai kebutuhan
                }}
                onPress={() => Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)}
              >
                <Text style={{ color: 'white', textAlign: 'center', fontSize : 16, }}>Rute</Text>
              </TouchableOpacity>
            </View>


            </View>
            )}
          />
        </View>
        
      )}
    </SafeAreaView>
  );
};

export default Callapi;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#004225',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius : 25,
    left : 20,
    right : 20, 
    top : 15,
    justifyContent : 'center',
    alignItems : 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  cardtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color : 'black'
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
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});
