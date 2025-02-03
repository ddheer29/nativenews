import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./global.css"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  )
}

export default App

const styles = StyleSheet.create({})