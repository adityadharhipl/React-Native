import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OtpScreen from '../screens/OtpScreen';
import PasswordChangedScreen from '../screens/PasswordChangedScreen';
import PasswordLoginScreen from '../screens/PasswordLoginScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginLanding"
      screenOptions={{ headerShown: false, animation: 'fade' }}
    >
      <Stack.Screen name="LoginLanding" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="PasswordLogin" component={PasswordLoginScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
