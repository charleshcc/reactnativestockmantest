import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import UserList from './UserList';
import ProfileScreen from './ProfileScreen';
import SecuritiesScreen from './Securities/SecuritiesScreen';
import { appColors } from './styles';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'User List') {
        iconName = 'home';
      } else if (route.name === 'Profile') {
        iconName = 'person';
      } else if (route.name === 'Securities') {
        iconName = 'shield';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: appColors.tabActive,
      tabBarInactiveTintColor: appColors.tabInactive,
      tabBarStyle: {
        backgroundColor: appColors.background,
        borderTopColor: appColors.textSecondary,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
  })}
>
      <Tab.Screen name="User List" component={UserList} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Securities" component={SecuritiesScreen} />
    </Tab.Navigator>
);

export default HomeScreen;