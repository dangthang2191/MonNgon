import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Toolbar } from './components/Toolbar'
import Search from './components/Search'
import { style } from './Style'
import { Trending } from './components/Trending'
import Category from '../../components/Category'

export default function HomePage() {
  return (
    <SafeAreaView style={style.home}>
      <Toolbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <Trending />
        <Category />
      </ScrollView>      
    </SafeAreaView>    
  )
}