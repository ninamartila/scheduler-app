import React from 'react';
import store from './src/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { DetailScheduler, HomeScheduler, ListScheduler } from './src/screens';
import moment from 'moment';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeSceduler" component={HomeScheduler} options={{ headerShown: false }} />
          <Stack.Screen name="ListScheduler" component={ListScheduler} options={{
            title: "UPCOMING SCHEDULE",
            headerStyle: {
              backgroundColor: '#FFF333',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
