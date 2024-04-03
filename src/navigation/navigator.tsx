import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets} from '@react-navigation/stack';

import {Stack} from './stack';
import {RouteNames} from './routes';
import {UserMedication} from '../features/userMedication/screens/UserMedication';
import {Deatils} from '../features/medicationDetails/screens/Details';
import {useInitialNavigationState} from '../hooks';

export const RootNavigator = () => {
  const {onStateChange, initialState} = useInitialNavigationState();
  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name={RouteNames.UserMedication}
          component={UserMedication}
        />
        <Stack.Screen name={RouteNames.MedicationDetails} component={Deatils} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
