import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import your screens for each tab
import SecuritiesScreen from './Securities/SecuritiesScreen';
import DepositScreen from './Securities/DepositScreen';

// Define your tabs
const TabNavigator = createMaterialTopTabNavigator(
  {
    Details: { screen: SecuritiesScreen },
    Deposit: { screen: DepositScreen },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'white', // Customize the tab bar background color
      },
      indicatorStyle: {
        backgroundColor: 'blue', // Customize the color of the currently active tab indicator
      },
      activeTintColor: 'blue', // Customize the text color of the currently active tab
      inactiveTintColor: 'gray', // Customize the text color of inactive tabs
    },
  }
);

export default createAppContainer(TabNavigator);