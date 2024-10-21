import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './screens/RootStackParams'; 
import HomeScreen from './screens/Home';
import MonthScreen from './screens/Month';
import WeekScreen from './screens/Week';
import EnrolScreen from './screens/Enrol'; 
import FeesScreen from './screens/Fees';
import ContactScreen from './screens/Contact'; 
import React from 'react';

const Stack = createStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Month" component={MonthScreen} />
        <Stack.Screen name="Week" component={WeekScreen} />
        <Stack.Screen name="Enrol" component={EnrolScreen} />
        <Stack.Screen name="Fees" component={FeesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
