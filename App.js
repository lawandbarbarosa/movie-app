import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/resgister/Login';
import Board from './screens/onbpoarding/Board';
import SignUp from './screens/resgister/SignUp';
import Home from './screens/Home/Home';
import Tab from './Tab';
import Search from './screens/search/Search';
import SearchContainer from './screens/search/SearchContainer';
import MovieDetail from './screens/detail/MovieDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='onBoarding' component={Board} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signUp' component={SignUp} />
        <Stack.Screen name='home' component={Tab} />
        <Stack.Screen name='search' component={SearchContainer} /> 
        <Stack.Screen name='moviedetail' component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
