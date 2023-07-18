import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import data from './data';
import MovieList from './MovieList';

const Search = () => {


  const [search,setSearch]=useState('')
  const [movies,setMovies]=useState([])

  const category = [
    { id: 1, category: 'All' },
    { id: 2, category: 'Adventure' },
    { id: 3, category: 'Comedy' },
    { id: 4, category: 'History' },
    { id: 5, category: 'Adventure' }
  ];


  const filterdMovies = ()=>{
    let filterMovie = movies;
    if(search.trim() !==''){
      filterMovie = data.filter((movie) => {
        return movie.movie_name.toLowerCase().includes(search.toLowerCase());
      });
    }
    setMovies(filterMovie)
  }

  return (
    <>
    <View style={{ backgroundColor: '#121212',paddingTop:40,flex:2 }}>
      <View style={{ padding: 13 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: 'white' }}>Search</Text>
      </View>
      <View style={styles.searchbar}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#212121',
          padding: 17,
          width: '70%',
          borderRadius: 22,
          gap: 12
        }}>
          <AntDesign name="search1" size={24} color="white" onPress={filterdMovies} />
          <TextInput placeholder='Search For That film Do you want'
           placeholderTextColor='gray' value={movies} onChangeText={text => setSearch(text)} />
        </View>
      </View>
      
      <ScrollView style={styles.category} horizontal>
        {category.map((item) => (
          <TouchableWithoutFeedback key={item.id} style={styles.button}>
            <View style={styles.categories}>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '400',
        backgroundColor:'#121212' }}>{item.category}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
        
      </ScrollView>
      <MovieList movies={movies} />
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  category: {
    flexDirection: 'row',
    gap: 12,
    padding:12,
    height:100,
    width:'100%'
  },
  categories:{
    flexDirection:'row',
   marginVertical:12,
   paddingHorizontal:8,
   backgroundColor:'#121212',
  },
});

export default Search;
