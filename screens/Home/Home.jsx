import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../compoents/Header'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Movies from '../../tabs/Movies'
import Series from '../../tabs/Series'

const Tabss = createMaterialTopTabNavigator()

export default function Home() {
  return (
    <View style={{backgroundColor:'#121212',flex:1}}>
     <Header />
     <Tabss.Navigator 
      initialRouteName='movies'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize:12},
        tabBarStyle:
        {backgroundColor:'#121212',borderBottomWidth:2,borderColor:'white',width:'90%',
         marginTop:12,alignSelf:'center',borderRadius:2}
      }}
      >

        <Tabss.Screen
         name='movies'
          component={Movies}
          options={{
            tabBarLabel:'movies',
            tabBarLabelStyle:{
           color:'white',
           fontSize:12
            }
          }}
          />

        <Tabss.Screen 
        name='series' 
        component={Series}
        options={{
            tabBarLabel:'Tv Shows',
            tabBarLabelStyle:{
                color:'white',
                fontSize:12
            }
        }}
        />
     </Tabss.Navigator>
    </View>
  )
}

const Styles = StyleSheet.create({

})