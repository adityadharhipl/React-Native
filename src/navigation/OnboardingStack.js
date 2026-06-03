import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LanguageScreen from '../screens/LanguageScreen';
import OnboardingExploreScreen from '../screens/OnboardingExploreScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OnboardingStartScreen from '../screens/OnboardingStartScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="OnboardingExplore" component={OnboardingExploreScreen} />
      <Stack.Screen name="OnboardingStart" component={OnboardingStartScreen} />
    </Stack.Navigator>
  );
}
