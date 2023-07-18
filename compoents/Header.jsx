import { View, Text,StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'


import batman from "../assets/batman.jpg"

export default function Header() {
  return (
    <SafeAreaView style={styles.headercontainer}>
      <Text style={styles.header}>Home</Text>
      <View style={styles.headername}>
    <Image source={batman} style={styles.batman} />
    <Text style={styles.salam}>Salam</Text>
    <Text style={styles.barbarosa}>lawand barbarosa</Text>
    {/* <Text style={{fontSize:12,fontVariant:700,color:'white'}}> Salam </Text>
    <Text style={{fontSize:8,fontVariant:500,color:'white'}}>Lawand barbarosa</Text> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headercontainer:{
        padding:20
    },
    header:{
        fontSize:20,
        fontWeight:700,
        color:'white',
        textAlign:'center',
    },
    headername:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'flex-start',
  marginTop:20,
  padding:12
    },
    batman:{
  width:50,
  height:50,
  borderRadius:30,
  borderWidth:3,
  borderColor:'white'
    },
    salam:{
    fontSize:19,
    color:'white',
    marginHorizontal:12,
    fontWeight:700
    },
    barbarosa:{
        fontSize:19,
        fontWeight:400,
        color:'white',
      
    }

})