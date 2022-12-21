
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppRotas from './src/rotas/AppRotas';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
    </NavigationContainer>
  );
}
