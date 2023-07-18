import { View, Text, Image, FlatList,StyleSheet,TouchableWithoutFeedback,
     TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import MovieContainer from '../compoents/MovieContainer'
import MovieList from '../compoents/MovieList'

const Movies = ({navigation}) => {



  return (
    <>
     <ScrollView style={{backgroundColor:'#121212',flex:1,padding:12}}>
    <MovieContainer navigation={navigation} />
    <MovieList />
    </ScrollView>

    </>
   
  )
}


const styles = StyleSheet.create({
    textheder:{
        fontSize:20,
        fontWeight:700,
        marginVertical:15,
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

export default Movies