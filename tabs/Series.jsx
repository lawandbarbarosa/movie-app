import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SeriesContainer from '../compoents/SeriesContainer'
import SeriesList from '../compoents/SeriesList'

const Series = () => {
  return (
    <ScrollView style={{backgroundColor:'#121212',flex:1,padding:12}}>
      <SeriesContainer />
      <SeriesList />
    </ScrollView>
  )
}

export default Series