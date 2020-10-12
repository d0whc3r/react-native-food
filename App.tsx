import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoutes, RootStackParamList } from './src/types';
import HomeScreen from './src/screens/home.screen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.HOME} screenOptions={{ title: 'Foodies' }}>
        <Stack.Screen name={NavigationRoutes.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
