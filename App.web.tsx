import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {
  ConsumerHomeScreen,
  ConsumerLoginScreen,
  ConsumerFindServiceScreen,
  ConsumerServiceDetailScreen,
  ConsumerWebFrame,
} from '@/web/consumer';
import type {ConsumerWebStackParamList} from '@/web/consumer/navigationTypes';

const Stack = createNativeStackNavigator<ConsumerWebStackParamList>();

export default function App(): JSX.Element {
  return (
    <ConsumerWebFrame>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ConsumerLogin"
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: 'transparent'},
          }}>
          <Stack.Screen name="ConsumerLogin" component={ConsumerLoginScreen} />
          <Stack.Screen name="ConsumerHome" component={ConsumerHomeScreen} />
          <Stack.Screen
            name="ConsumerFindService"
            component={ConsumerFindServiceScreen}
          />
          <Stack.Screen
            name="ConsumerServiceDetail"
            component={ConsumerServiceDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConsumerWebFrame>
  );
}
