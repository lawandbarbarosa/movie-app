import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home/Home'
const Tabs = createBottomTabNavigator()

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Search from './screens/search/Search'


const Tab = () => {
  return (
    <Tabs.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            backgroundColor:'#212121',
            width:'90%',height:80,padding:10,alignSelf:'center',
            bottom:25,borderRadius:50,position:'absolute',left:18,
            borderTopColor:'black'
        },
    }}>

      <Tabs.Screen
       name='home'
        component={Home}
        options={{
            tabBarIcon:(props)=><Feather name='home' color='#F8BD00' size={20} />,
            tabBarLabelStyle:{
                color:'#F8BD00',
            }
        }}
        />


<Tabs.Screen
       name='search'
        component={Search}
        options={{
            tabBarIcon:(props)=><Feather name='search' color='#F8BD00' size={20} />,
            tabBarLabelStyle:{
                color:'#F8BD00',
            }
        }}
        />


<Tabs.Screen
       name='movies'
        component={Home}
        options={{
            tabBarIcon:(props)=><MaterialIcons name="local-movies" size={24} color="#F8BD00" />,
            tabBarLabelStyle:{
                color:'#F8BD00',
            }
        }}
        />


<Tabs.Screen
       name='menu'
        component={Home}
        options={{
            tabBarIcon:(props)=><Feather name='menu' color='#F8BD00' size={20} />,
            tabBarLabelStyle:{
                color:'#F8BD00',
            }
        }}
        />
        
    </Tabs.Navigator>
  )
}

export default Tab