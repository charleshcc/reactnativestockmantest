import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { appColors } from '../styles';
import DepositScreen from './DepositScreen';
import StockScreen from './StockScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const DetailsScreen = ({ route }) => {
  const { scCode } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Security Code: {scCode}</Text>
    </View>
  );
};

const DepositScreenWithScroll = () => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the ScrollView when the component is mounted
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, []);

  return (
    <ScrollView ref={scrollViewRef}>
      <DepositScreen />
    </ScrollView>
  );
};

const SecurityManageScreen = ({ route }) => {
  const { scCode } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Details"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#E0E1DD',
        style: { backgroundColor: appColors.tabBarBackground, marginTop: insets.top },
      }}
    >
      <Tab.Screen name="Details" component={DetailsScreen} initialParams={{ scCode }} />
      <Tab.Screen name="Deposit" component={DepositScreenWithScroll} />
      <Tab.Screen name="Stock" component={StockScreen} />
    </Tab.Navigator>
  );
};

export default SecurityManageScreen;