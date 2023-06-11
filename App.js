import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import HomeScreen from './HomeScreen';
import AddSecurityScreen from './Securities/AddSecurityScreen';
import SecurityManageScreen from './Securities/SecurityManageScreen';
import StockAssetsChartScreen from './Securities/StockAssetsChartScreen';
import StockScreen from './Securities/StockScreen';
import store from './store';
import { appColors } from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: appColors.background },
          }}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: appColors.background },
            headerTitleStyle: { color: appColors.textPrimary },
            headerTintColor: appColors.textPrimary,
            cardStyle: { backgroundColor: appColors.background },
          }}
          />
          <Stack.Screen
            name="AddSecurity"
            component={AddSecurityScreen}
            options={{
              title: 'New Security',
              headerStyle: { backgroundColor: appColors.background },
              headerTitleStyle: { color: appColors.textPrimary },
              headerTintColor: appColors.textPrimary,
              cardStyle: { backgroundColor: appColors.background },
            }}
          />
          <Stack.Screen name="SecurityManage" component={SecurityManageScreen}
          options={{
            title: 'Security Manage',
            headerStyle: { backgroundColor: appColors.background },
            headerTitleStyle: { color: appColors.textPrimary },
            headerTintColor: appColors.textPrimary,
            cardStyle: { backgroundColor: appColors.background },
          }}
          />
          <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen
          name="StockAssetsChart"
          component={StockAssetsChartScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
