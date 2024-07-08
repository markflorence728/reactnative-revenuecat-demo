import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {configureRevenueCat} from './services/revenueCat';
import HomeScreen from './screens/HomeScreen';
import PurchaseScreen from './screens/PurchaseScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    configureRevenueCat();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
