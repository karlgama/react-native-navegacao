import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({componente = Home}){
    return <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={componente} />        
        <Stack.Screen name='Produtor' component={Produtor} />        
    </Stack.Navigator>
}