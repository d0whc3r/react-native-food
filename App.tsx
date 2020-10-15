import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationRoute, RootStackParamList } from './src/types';
import HomeScreen from './src/screens/home/home.screen';
import DetailScreen from './src/screens/detail/detail.screen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoute.HOME} screenOptions={{ title: 'Business Search' }}>
        <Stack.Screen name={NavigationRoute.HOME} component={HomeScreen} />
        <Stack.Screen name={NavigationRoute.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
