// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import RepresentativesScreen from './screens/RepresentativesScreen.js';
import SenatorsScreen from './screens/SenatorScreen.js';
// import PresidentsScreen from './screens/PresidentsScreen.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused? 'home': 'home'
          // }else if (route.name === 'Presidents') {
          //   iconName = focused ? 'user' : 'user';
          // }else if (route.name === 'Senators') {
            iconName = focused ? 'user' : 'user';
          }else if (route.name === 'Representatives') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#c0032c',
        tabBarInactiveTintColor: '#002368',
      })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        {/* <Tab.Screen name='Presidents' component={PresidentsScreen}/> */}
        <Tab.Screen name='Representatives' component={RepresentativesScreen}/>
        <Tab.Screen name='Senators' component={SenatorsScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
