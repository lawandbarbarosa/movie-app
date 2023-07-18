import { View, Text, Image, FlatList,StyleSheet,TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import movies from '../screens/Home/movies'
import axios from 'axios'
const MovieContainer = ({navigation}) => {

     const renderItem =({item})=>{
        const {cover,movie_name,movie_id,director,description}=item
        return(
      <TouchableWithoutFeedback key={movie_id}
       onPress={()=> navigation.navigate('moviedetail',{selectMovie:item}) } >
         <View style={styles.moviecontainer}>
         <Image source={cover} style={{width:170,height:250,borderRadius:20}} />
         </View>
      </TouchableWithoutFeedback>
        )
       }

  return (
    <>
     <View style={{backgroundColor:'#121212',flex:1,padding:12}}>
        <Text style={styles.textheder}>Favourite Movies</Text>
    <FlatList
    horizontal
    data={movies}
    renderItem={renderItem}
    keyExtractor={(item)=> `${item.id}`}
    />
    </View>

    </>
   
  )
}


const styles = StyleSheet.create({
    textheder:{
        fontSize:30,
        fontWeight:700,
        marginVertical:22,
        color:'white',
    },
    moviecontainer:{
 paddingHorizontal:12
    },
    movielistcontainer:{
        padding:12,
        marginVertical:12
    },
    movielist:{

    }
})

export default MovieContainer