import { View, Text,StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const MovieDetail = ({route,navigation}) => {


    const [selectMovie,setSelectMovie]=useState(null)

    useEffect(()=>{
        const {selectMovie}=route.params
        setSelectMovie(selectMovie)
    })

  return (
    <ScrollView style={{backgroundColor:'#121212',width:'100%',flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
         paddingTop:50,paddingHorizontal:20,zIndex:20,}}>
        <AntDesign name="arrowleft" size={24} color="white" onPress={()=> navigation.goBack()} />
        <AntDesign name="hearto" size={24} color="white" />
        </View>
        <Image source={selectMovie?.cover} style={{width:270,height:500,
     right:-11,borderRadius:30,position:'absolute'}} 
      resizeMode='cover' />
      <View style={{width:'100%',height:'100%',position:'absolute',backgroundColor:'#121212',opacity:0.6}} />
    


      <View style={{padding:20,top:400}}>
        <Text style={{fontSize:30,color:'white',marginVertical:12,
        fontWeight:700,textAlign:'center'}}>{selectMovie?.movie_name}</Text>
        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:12}}>
            <Text style={{color:'white',fontSize:32}}>Director / </Text>
        <Text style={{color:'white',fontSize:22,opacity:0.5}}> {selectMovie?.director}</Text>
        </View> 
           <Text style={{fontSize:12,color:'white',fontWeight:500}}>
           {selectMovie?.description}
           </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    director:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:'30%',
        left:'22%',
    }
})

export default MovieDetail