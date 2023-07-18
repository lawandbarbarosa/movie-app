import { View, Text, FlatList,Image,
    TouchableWithoutFeedback,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import movies from '../screens/Home/movies'


const MovieList = () => {

  return (
    <View>
      <Text style={styles.recently}>recently Addes</Text>
        {movies.map((movie)=>{
      const {cover,movie_name,movie_id,director,description,genre1,genre2,genre3}=movie
      return(
<TouchableWithoutFeedback key={movie_id}>
    <View style={styles.movielist}>
       <View>
       <Image source={cover} style={{width:100,height:150,marginRight:12,borderRadius:15}} resizeMode='contain' />
       </View>
       <View style={styles.moviesname}>
       <Text style={{fontSize:29,fontWeight:600,color:'white'}}>{movie_name}</Text>
       <Text style={{fontSize:19,fontWeight:300,color:'gray',marginTop:5,marginBottom:12}}>{director}</Text>
       <TouchableOpacity style={styles.genres}>
          <Text style={styles.genre}>{genre1}</Text> 
          <Text style={styles.genre}>{genre2}</Text> 
          <Text style={styles.genre}>{genre3}</Text> 
       </TouchableOpacity>
     </View>
     
    </View>
   </TouchableWithoutFeedback>
      )
     })}
    </View>
  )
}

const styles = StyleSheet.create({

  recently:{
    fontSize:30,
    fontWeight:600,
    marginVertical:14,
    padding:12,
    color:'white',
  },
  movielist:{
    flexDirection:'row',
    marginHorizontal:12,
    marginVertical:15
  },
  moviesname:{
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  genres:{
    flexDirection:'row',
    gap:8,
    display:'flex',
    flexWrap:'wrap',
    width:'100%'
  },
  genre:{
    borderWidth:1,
    borderColor:'#F05454',
    padding:8,
    borderRadius:8,
    color:'white',
    fontSize:12
  }
})

export default MovieList