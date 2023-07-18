import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Search from './Search'
import MovieList from './MovieList'

const SearchContainer = () => {
  return (
    <ScrollView>
      <Search />
      <MovieList />
    </ScrollView>
  )
}

export default SearchContainer