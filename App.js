import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import HomeScreen from './pages/HomeScreen';
import IMCScreen from './pages/IMCScreen';
import ICQScreen from './pages/ICQScreen';

const Stack = createNativeStackNavigator();

const theme = {
  backgroundColor: '#f5f5f5',
  primaryColor: '#f4511e',
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'Página Inicial', 
            }}
          />

          <Stack.Screen 
            name="IMCScreen" 
            component={IMCScreen}
            options={{ 
              title: 'Calcular IMC', 
            }}
          />

          <Stack.Screen 
            name="ICQScreen" 
            component={ICQScreen} 
            options={{ 
              title: 'Calcular ICQ', 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
