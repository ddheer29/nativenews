import { StyleSheet } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './src/context/ThemeContext'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

const styles = StyleSheet.create({})