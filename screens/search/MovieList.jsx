import { View, Text, FlatList, Image, ScrollView,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import data from "./data"

const MovieList = ({movies}) => {

  return (
     <ScrollView style={{backgroundColor:'#121212',zIndex:200,padding:20}}>
   {data.map((movie)=>{
 const {movie_id,cover,movie_name,genre1,genre2,genre3,director}=movie
 return(
  <ScrollView key={movie_id} style={{marginVertical:20,flexDirection:'row',display:'flex'}}>
    <View style={{flexDirection:'row',gap:12,width:'90%'}}>
    <Image source={cover} style={{width:100,height:150,borderRadius:20}} />
 <View style={styles.info}>
  <Text style={{fontSize:20,fontWeight:600,color:'white'}}>{movie_name.toString()}</Text>
  <Text style={{fontSize:15,fontWeight:400,color:'white',marginTop:12}}>Director / {director}</Text>
  <View style={styles.genres}>
    <Text style={{borderWidth:1,width:75,borderColor:'#F05454',padding:6,borderRadius:8,color:'white'}}>{genre1}</Text>
    <Text style={{borderWidth:1,width:90,borderColor:'#F05454',padding:6,color:'white',flexWrap:'wrap',marginHorizontal:12,borderRadius:8}}>{genre2}</Text>
    <Text style={{borderWidth:1,width:95,borderColor:'#F05454',padding:6,color:'white',borderRadius:8}}>{genre3}</Text>
  </View>
 </View>
    </View>
 
  </ScrollView>
 )
   })}
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  info:{
 flexDirection:'column',
 alignItems:'flex-start',
 justifyContent:'flex-start'
  },
  genres:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginVertical:18,
    flexWrap:'wrap',
    display:'flex',
    width:'90%',
    gap:12
  }

})

export default MovieList