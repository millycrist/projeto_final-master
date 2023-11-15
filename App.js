import 'react-native-reanimated'

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes'
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
} 